import {
    SeedCaneUpload,
    SeedCaneAll,
    SeedCaneData,
    SeedCaneDelete
} from "../../../controllers/GeoJsonUploader/Harvesting/SeedCane.js"
import express from "express";




const router = express.Router();

router.post("/seedcanegeojson",  SeedCaneUpload)
router.get("/seedcanegeojson",  SeedCaneAll);
router.get("/seedcanedata", SeedCaneData);
router.delete("/seedcanegeojson/:id",  SeedCaneDelete)



export default router
