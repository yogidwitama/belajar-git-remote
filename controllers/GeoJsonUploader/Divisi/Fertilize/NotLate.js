import geoJsonUploadFerNotLate from "../../../../models/GeoJsonUploader/Divisi/Fertilize/FerNotLate.js";
import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10000000 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "application/json") {
            cb(null, true)
        } else {
            cb(new Error("Json Only"), false)
        }
    }
}).single("file")


export const FerNotLateUpload = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.error(err);
                res.status(400).send({ error: err.message })
            } else {
                const data = JSON.parse(req.file.buffer.toString());
                const geojson = new geoJsonUploadFerNotLate({
                    name: req.file.originalname,
                    geojson: req.file.buffer,
                    author: req.body.author
                });
                await geojson.save();
                console.log("Data Saved")
                res.status(200).send({ message: "Data Saved" })
            }
        })
    } catch (error) {
        console.error(error);
        req.status(500).status({ error: "Error Upload" })
    }
};

export const FerNotLateGetAll = async (req, res) => {
    try {
        const geojsons = await geoJsonUploadFerNotLate.find({}, { id: 1, name: 1, author: 1, createdAt: 1 });
        res.status(200).json(geojsons)
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to retrieve GeoJSon")
    }
};

export const FerNotLateData = async (req, res)=>{
    try {
        const geojsons = await geoJsonUploadFerNotLate.find();
        const jsonData = geojsons.map(geojson=>{
            const data = JSON.parse(geojson.geojson.toString());
            return{
                id:geojson._id,
                name: geojson.name,
                author: geojson.author,
                createdAt: geojson.createdAt,
                data
            }
        })
        res.status(200).json(jsonData)
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to Retrieve GeoJson")
    }
};

export const FerNotLateDelete = async (req, res) =>{
    try {
        const geojson = await geoJsonUploadFerNotLate.findById(req.params.id)
    if(!geojson){
        return res.status(404).send({error:"GeoJson not Found"})
    }
    await geojson.remove();
    res.status(200).send({message:"GeoJSON deleted"})
    } catch (error) {
        console.error(error);
        res.status(500).send({error:"Failed to delete"})
    }
}