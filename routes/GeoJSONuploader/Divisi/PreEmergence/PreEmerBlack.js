import express from "express";
import {
    PreEmerBlackAll,
    PreEmerBlackData,
    PreEmerBlackDelete,
    PreEmerBlackUpload
} from "../../../../controllers/GeoJsonUploader/Divisi/PreEmergence/PreEmerBlack.js";

const router = express.Router();

router.post("/preemergenceupload", PreEmerBlackUpload);
router.get("/preemerbalckall", PreEmerBlackAll);
router.get("/preemerblackdata", PreEmerBlackData);
router.delete("/preemerblackdel", PreEmerBlackDelete);

export default router;
