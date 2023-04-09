import express from "express";
import {
    PreEmerNotLateAll,
    PreEmerNotLateDelete,
    PreEmerNotLateData,
    PreEmerNotLateUpload
} from "../../../../controllers/GeoJsonUploader/Divisi/PreEmergence/PreEmerNotLate.js";

const router = express.Router();

router.get("/premernotlateall", PreEmerNotLateAll);
router.post("/preemernotlateupload", PreEmerNotLateUpload);
router.get("/preemernotlatedata", PreEmerNotLateData);
router.delete("/preemernotlatedel", PreEmerNotLateDelete);

export default router;