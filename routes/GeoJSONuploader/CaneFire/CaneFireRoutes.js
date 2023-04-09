import express from "express";
import {
    CaneFireAll,
    CaneFireData,
    CaneFireDelete,
    CaneFireUpload
} from "../../../controllers/GeoJsonUploader/CaneFire/CaneFire.js";

const router = express.Router();

router.post("/canefireupload", CaneFireUpload);
router.get("/canefireall", CaneFireAll);
router.get("/canefiredata", CaneFireData);
router.delete("/canefiredel", CaneFireDelete);

export default router;
