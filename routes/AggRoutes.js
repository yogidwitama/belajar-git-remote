import express from "express";
import { 
    getAll, 
    getSum,
} from "../controllers/AggController.js";

const router = express.Router();

router.get('/agg', getAll);
router.get('/aggsum', getSum);

export default router;