import express from "express";
import {
GlifRedData,
GlifRedDelete,
GlifRedGetAll,
GlifRedUpload
} from "../../../../controllers/GeoJsonUploader/Divisi/Glifosat/GlifRed.js";

const router = express.Router();

router.get("/glifreddata", GlifRedData);
router.get("/glifredall", GlifRedGetAll);
router.post("/glifredupload", GlifRedUpload);
router.delete("/glifredel", GlifRedDelete);

export default router;