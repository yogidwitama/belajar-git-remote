import express from "express";
import { 
    getTshRank,
    getTshRankById,
    saveTshRank,
    updateTshRank,
    deleteTshRank 
} from "../../../controllers/Management/Management/TshRank.js";

const router = express.Router();

router.get('/tshrank', getTshRank);
router.get('/tshrank/:id', getTshRankById);
router.post('/tshrank', saveTshRank);
router.patch('/tshrank/:id', updateTshRank);
router.delete('/tshrank/:id', deleteTshRank);

export default router;