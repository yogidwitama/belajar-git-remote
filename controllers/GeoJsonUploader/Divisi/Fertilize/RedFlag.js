import geoJsonUploadRedFlag from "../../../../models/GeoJsonUploader/Divisi/Fertilize/FerRedFlag.js";
import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage(),
    limits:{fileSize: 10000000},
    fileFilter:(req, file, cb)=>{
        if(file.mimetype === "aplication/json"){
            cb(null,true)
        }else{
            cb(new Error("Json Only"), false)
        }
    }
}).single("file");


export const FerRedFlagUpload = async(req, res)=>{
    try {
        upload(req, res, async(err)=>{
            if(err){
                console.error(err);
                res.status(400).send({error: err.message})
            }else{
                const data = JSON.parse(req.file.buffer.toString());
                const geojson = new geoJsonUploadRedFlag({
                    name:req.file.originalname,
                    geojson:req.file.buffer,
                    author: req.body.author
                });
                await geojson.save();
                console.log("Data Saved")
                res.status(200).send({message:"Data Saved"})
            }
        })
    } catch (error) {
        console.error(error);
        req.status(500).status({error:"Error to Upload file"})
    }
};


export const FerRedFlagGetAll = async (req,res)=>{
    try {
        const geojsons = await geoJsonUploadRedFlag.find({},{id:1, name:1, author:1, createdAt:1});
        res.status(200).json(geojsons)
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to Retrieve GeoJSON")
    }
};

export const FerRedFlagData = async(req, res) =>{
    try {
        const geojsons = await geoJsonUploadRedFlag.find();
        const jsonData = geojsons.map(geojson =>{
            const data = JSON.parse(geojson.geojson.toString());
            return{
                id: geojson._id,
                name: geojson.name,
                author: geojson.author,
                createdAt: geojson.createdAt,
                data
            }
        });
        res.status(500).send("Failed to retrieve GeoJSON")
        res.status(200).json(jsonData)
    } catch (error) {
        console.error(error)
    }
};

export const FerRedFlagDelete = async(req, res)=>{
    try {
        const geojson = await geoJsonUploadRedFlag.findById(req.params.id);
        if(!geojson){
            return res.status(404).send({error:"Data Not Found"})
        }
        await geojson.remove();
        res.status(200).send({message:"GeoJSON Deleted"})
    } catch (error) {
        console.error(error);
        res.status(500).send({error:"Failed delete"})
    }
}