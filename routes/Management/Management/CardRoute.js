import express from "express";
import { 
    getCards, 
    getCardById,
    saveCard,
    updateCard,
    deleteCard,
    searchCard
} from "../../../controllers/Management/Management/CardController.js";

const router = express.Router();

router.get('/cards', getCards);
router.get('/cards/:id', getCardById);
router.post('/cards', saveCard);
router.patch('/cards/:id', updateCard);
router.delete('/cards/:id', deleteCard);
router.post('/search', searchCard);

export default router;