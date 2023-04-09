import express from "express";
import {
    PloughNotLatUpload,
    PloughNotLateAll,
    PloughNotLateData,
    PloughNotLateDelete
} from "../../../../controllers/GeoJsonUploader/Divisi/Ploughing/PloughNotLate.js";

const router =  express.Router();

router.post("/ploughnotlatupload", PloughNotLatUpload);
router.get("/ploughnotlateall", PloughNotLateAll);
router.get("/ploughnotlatedata", PloughNotLateData);
router.delete("/ploughnotlatedel", PloughNotLateDelete);

export default router;