import express from "express";
import {
    getPlantingTractor ,
    getPlantingTractorById,
    savePlantingTractor ,
    deletePlantingTractor ,
    updatePlantingTractor 
} from "../../controllers/PlantationTable/PlantationTractor.js";

const router = express.Router();

router.get('/plantingtractor', getPlantingTractor );
router.get('/plantingtractor/:id', getPlantingTractorById);
router.post('/plantingtractor', savePlantingTractor );
router.patch('/plantingtractor/:id', updatePlantingTractor );
router.delete('/plantingtractor/:id', deletePlantingTractor );

export default router;