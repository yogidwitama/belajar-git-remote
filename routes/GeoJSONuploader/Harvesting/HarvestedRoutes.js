import {
    HarvestedUpload,
    HarvestedGetAll,
    HarvestedData,
    HarvestedDelete
} from "../../../controllers/GeoJsonUploader/Harvesting/Harvested.js"
import express from "express";




const router = express.Router();

router.post("/harvestinggeojson",  HarvestedUpload)
router.get("/harvestinggeojson",  HarvestedGetAll)
router.get("/harvestingdata",  HarvestedData)
router.delete("/harvestinggeojson/:id",  HarvestedDelete)



export default router
