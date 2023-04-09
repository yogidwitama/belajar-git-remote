import geoJsonUploadPreEmerBlack from "../../../../models/GeoJsonUploader/Divisi/PreEmergence/PreEmerBlack.js"
import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 50 * 1024 * 1024  },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "application/json") {
            cb(null, true)
        } else {
            cb(new Error("json only :/"), false)
        }
    }
}).single("file");


export const PreEmerBlackUpload = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.error(err);
                res.status(400).send({ error: err.message })
            } else {
                const data = JSON.parse(req.file.buffer.toString());
                const geojson = new geoJsonUploadPreEmerBlack({
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

export const PreEmerBlackAll = async (req, res) => {
    try {
        const geojsons = await geoJsonUploadPreEmerBlack.find({}, { id: 1, name: 1, author: 1, createdAt: 1 })
        res.status(200).json(geojsons)
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to retrieve GeoJson")
    }
};

export const PreEmerBlackData = async (req, res) => {
    try {
        const geojsons = await geoJsonUploadPreEmerBlack.find();
        const jsonData = geojsons.map(geojson => {
            const data = JSON.parse(geojson.geojson.toString());
            return {
                id: geojson._id,
                name: geojson.name,
                author: geojson.author,
                createdAt: geojson.createdAt,
                data
            }
        })
        res.status(200).json(jsonData)
    } catch (error) {
        console.error(error);
        res.status(500).send("failed to retrieve geojson")
    }
};

export const PreEmerBlackDelete = async (req, res) => {
    try {
        const geojson = await geoJsonUploadPreEmerBlack.findById(req.params.id)
        if (!geojson) {
            return res.status(404).send({ message: "GeoJson not Found" })
        }
        await geojson.remove();
        res.status(200).send({ message: "GeoJSON deleted" })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to delete" })
    }
};