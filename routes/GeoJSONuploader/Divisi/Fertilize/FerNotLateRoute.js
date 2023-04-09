import express from "express";

import {
 FerNotLateData,
 FerNotLateGetAll,
 FerNotLateUpload,
 FerNotLateDelete
} from "../../../../controllers/GeoJsonUploader/Divisi/Fertilize/NotLate.js";

const router = express.Router();

router.post("/fernotlateupload", FerNotLateUpload);
router.get("/fernotlatedata", FerNotLateData);
router.delete("/fernotlatedel", FerNotLateDelete)
router.get("/fernotlateall", FerNotLateGetAll);

export default router