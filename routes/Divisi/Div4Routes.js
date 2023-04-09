import express from "express";
import { 
    getCards, 
    getCardById,
    saveCard,
    updateCard,
    deleteCard
} from "../../controllers/Divisi/Div4Controller.js";

const router = express.Router();

router.get('/div4', getCards);
router.get('/div4/:id', getCardById);
router.post('/div4', saveCard);
router.patch('/div4/:id', updateCard);
router.delete('/div4/:id', deleteCard);

export default router;