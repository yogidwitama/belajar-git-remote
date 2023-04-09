import express from "express";
import {
    PlanNotLatUpload,
    PlanNotLateAll,
    PlanNotLateData,
    PlanNotLateDelete
} from "../../../../controllers/GeoJsonUploader/Divisi/Planting/PlanNotLate.js";

const router = express.Router();


router.post("/plannotalateupload", PlanNotLatUpload);
router.get("/plannotlateall", PlanNotLateAll);
router.get("/plannotlatedata", PlanNotLateData);
router.delete("/plannotlatedelete", PlanNotLateDelete);

export default router;