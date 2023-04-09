import express from "express";
import {
MasterCurrentAll,
MasterCurrentData,
MasterCurrentDelete,
MasterCurrentUpload
} from "../../../controllers/GeoJsonUploader/MasterList/MasterCurrent.js";

const router = express.Router();

router.post("/mastercurrentupload", MasterCurrentUpload);
router.get("/mastercurrentall", MasterCurrentAll);
router.get("/mastercurrentdata", MasterCurrentData);
router.delete("/mastercurrentdel", MasterCurrentDelete);

export default router;