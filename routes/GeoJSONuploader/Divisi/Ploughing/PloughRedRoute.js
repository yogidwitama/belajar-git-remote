import express from "express";
import {
    PloughRedAll,
    PloughRedData,
    PloughRedDelete,
    PloughRedUpload
} from "../../../../controllers/GeoJsonUploader/Divisi/Ploughing/PloughRed.js";

const router = express.Router();

router.post("/ploughredupload", PloughRedUpload);
router.get("/ploughredall", PloughRedAll);
router.get("/ploughreddata", PloughRedData);
router.delete("/ploughdelete", PloughRedDelete);

export default router;
