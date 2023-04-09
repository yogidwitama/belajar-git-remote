
import multer from "multer";
import SeedCanegeoJsonUplod from "../../../models/GeoJsonUploader/Harvesting/SeedCane.js";

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10000000 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "application/json") {
            cb(null, true)
        } else {
            cb(new Error("Json Only"), false)
        }
    },
}).single("file")


export const SeedCaneUpload = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.error(err);
                res.status(400).send({ error: err.message });
            } else {
                const data = JSON.parse(req.file.buffer.toString());
                const geojson = new SeedCanegeoJsonUplod({
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
        req.status(500).status({ error: "Error uploading file" })
    }
};


export const SeedCaneAll = async (req, res) => {
    try {
        const geojsons = await SeedCanegeoJsonUplod.find({}, { id: 1, name: 1, author: 1, createdAt: 1 });
        res.status(200).json(geojsons);
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to retrieve GeoJSONs');
    }
};

export const SeedCaneData = async (req, res) => {
    try {
        const geojsons = await SeedCanegeoJsonUplod.find();
        const jsonData = geojsons.map(geojson => {
            const data = JSON.parse(geojson.geojson.toString());
            return {
                id: geojson._id,
                name: geojson.name,
                author: geojson.author,
                createdAt: geojson.createdAt,
                data
            };
        });
        res.status(500).send('Failed to retrieve GeoJSON data');
        res.status(200).json(jsonData);
    } catch (error) {
        console.error(error);
    }
}


export const SeedCaneDelete = async (req, res) => {
    try {
        const geojson = await SeedCanegeoJsonUplod.findById(req.params.id);
        if (!geojson) {
            return res.status(404).send({ error: "GeoJson not Found" })
        }
        await geojson.remove();
        res.status(200).send({ message: "GeoJSON deleted" })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to delete" })
    }
}