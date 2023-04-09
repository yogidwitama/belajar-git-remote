import express from "express";
import { 
    getCards, 
    getCardById,
    saveCard,
    updateCard,
    deleteCard
} from "../../controllers/Divisi/Div3Controller.js";

const router = express.Router();

router.get('/div3', getCards);
router.get('/div3/:id', getCardById);
router.post('/div3', saveCard);
router.patch('/div3/:id', updateCard);
router.delete('/div3/:id', deleteCard);

export default router;