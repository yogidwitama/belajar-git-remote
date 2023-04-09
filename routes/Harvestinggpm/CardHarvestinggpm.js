import express from "express";
import { 
    getCardharvesting,
    getCardharvestingById,
    saveCardharvesting,
    updateCardharvesting,
    deleteCardharvesting
} from "../../controllers/Harvesting/Harvestingcardgpm.js";

const router = express.Router();

router.get('/cardsharvesting', getCardharvesting);
router.get('/cardsharvesting/:id', getCardharvestingById);
router.post('/cardsharvesting', saveCardharvesting);
router.patch('/cardsharvesting/:id', updateCardharvesting);
router.delete('/cardsharvesting/:id', deleteCardharvesting);


export default router;