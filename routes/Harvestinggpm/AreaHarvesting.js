import express from "express";
import {
    getAreaharvesting,
    getAreaharvestingById,
    saveAreaharvesting,
    updateAreaharvesting,
    deleteAreaharvesting
} from "../../controllers/Harvesting/Harvestingarea.js";

const router = express.Router();

router.get('/areasharvesting', getAreaharvesting);
router.get('/areasharvesting/:id', getAreaharvestingById);
router.post('/areasharvesting', saveAreaharvesting);
router.patch('/areasharvesting/:id', updateAreaharvesting);
router.delete('/areasharvesting/:id', deleteAreaharvesting);


export default router;