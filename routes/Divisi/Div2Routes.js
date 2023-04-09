import express from "express";
import { 
    getCards, 
    getCardById,
    saveCard,
    updateCard,
    deleteCard
} from "../../controllers/Divisi/Div2Controller.js";

const router = express.Router();

router.get('/div2', getCards);
router.get('/div2/:id', getCardById);
router.post('/div2', saveCard);
router.patch('/div2/:id', updateCard);
router.delete('/div2/:id', deleteCard);

export default router;