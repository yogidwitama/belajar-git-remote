import express from "express";
import {
    PlanRedLatUpload,
    PlanRedLateAllRed,
    PlanRedLateDataRed,
    PlanRedLateDelete
} from "../../../../controllers/GeoJsonUploader/Divisi/Planting/PlanRed.js";

const router = express.Router();

router.post("/planredupload", PlanRedLatUpload);
router.get("/planredall", PlanRedLateAllRed);
router.get("/planreddata", PlanRedLateDataRed);
router.delete("/planreddelete", PlanRedLateDelete);

export default router;