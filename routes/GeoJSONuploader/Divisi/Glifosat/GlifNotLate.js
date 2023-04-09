import express from "express";
import {
    GlifNotLatUpload,
    GlifNotLateAll,
    GlifNotLateData,
    GlifNotLateDelete
} from "../../../../controllers/GeoJsonUploader/Divisi/Glifosat/GlifNotLate.js";

const router = express.Router();

router.post("/glifnotlateupload", GlifNotLatUpload);
router.get("/getdata", GlifNotLateAll);
router.get("/glifnotlatedata", GlifNotLateData);
router.delete("/glifnotelatdel", GlifNotLateDelete);

export default router;