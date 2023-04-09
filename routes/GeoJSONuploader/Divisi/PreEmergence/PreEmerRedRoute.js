import express from "express";
import {
    PreEmerRedAll,
    PreEmerRedData,
    PreEmerRedDelete,
    PreEmerRedUpload
} from "../../../../controllers/GeoJsonUploader/Divisi/PreEmergence/PreEmerRed.js";

const router = express.Router();

router.post("/premerredupload", PreEmerRedUpload);
router.get("/preemerreddata", PreEmerRedData);
router.get("/preemerredall", PreEmerRedAll);
router.delete("/preemerreddel", PreEmerRedDelete);

export default router;
