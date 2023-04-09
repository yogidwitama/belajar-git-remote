import express, { Router } from "express";
import {
    MasterFutureAll,
    MasterFutureData,
    MasterFutureDelete,
    MasterFutureUpload
} from "../../../controllers/GeoJsonUploader/MasterList/MasterFuture.js";

const router = express.Router();


router.get("/masterfutureall", MasterFutureAll);
router.get("/masterfuturedata", MasterFutureData);
router.post("/masterfutureupload", MasterFutureUpload);
router.delete("/masterfuturedel", MasterFutureDelete);


export default router