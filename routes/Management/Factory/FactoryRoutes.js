import express from "express";
import { 
    getCards, 
    getCardById,
    saveCard,
    updateCard,
    deleteCard,
    searchCard
} from "../../../controllers/Management/Factory/FactoryController.js";

const router = express.Router();

router.get('/factory', getCards);
router.get('/factory/:id', getCardById);
router.post('/factory', saveCard);
router.patch('/factory/:id', updateCard);
router.delete('/factory/:id', deleteCard);
router.post('/search', searchCard);

export default router;