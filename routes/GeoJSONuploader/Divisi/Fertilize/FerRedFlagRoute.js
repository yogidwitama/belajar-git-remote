import express from "express";
import {
    FerRedFlagUpload,
    FerRedFlagData,
    FerRedFlagDelete,
    FerRedFlagGetAll
} from "../../../../controllers/GeoJsonUploader/Divisi/Fertilize/RedFlag.js";


const router = express.Router();

router.post("/ferredflagupload", FerRedFlagUpload);
router.get("/ferredflagdata", FerRedFlagData);
router.get("/ferredflaggetall", FerRedFlagGetAll);
router.delete("/ferreddelete", FerRedFlagDelete);

export default router;