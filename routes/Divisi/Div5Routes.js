import express from "express";
import { 
    getCards, 
    getCardById,
    saveCard,
    updateCard,
    deleteCard
} from "../../controllers/Divisi/Div5Controller.js";

const router = express.Router();

router.get('/div5', getCards);
router.get('/div5/:id', getCardById);
router.post('/div5', saveCard);
router.patch('/div5/:id', updateCard);
router.delete('/div5/:id', deleteCard);

export default router;