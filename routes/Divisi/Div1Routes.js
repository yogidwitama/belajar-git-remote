import express from "express";
import { 
    getCards, 
    getCardById,
    saveCard,
    updateCard,
    deleteCard
} from "../../controllers/Divisi/Div1Controller.js";

const router = express.Router();

router.get('/div1', getCards);
router.get('/div1/:id', getCardById);
router.post('/div1', saveCard);
router.patch('/div1/:id', updateCard);
router.delete('/div1/:id', deleteCard);

export default router;