import express from "express";
import {
    getAnalyticoffSeas,
    getAnalyticoffSeasById,
    saveAnalyticoffSeas,
    deleteAnalyticoffSeas,
    updateAnalyticoffSeas
} from "../../controllers/CaneFire/TableAnalyticOffSea.js";

const router = express.Router();

router.get('/analyticoffseas', getAnalyticoffSeas);
router.get('/analyticoffseas/:id', getAnalyticoffSeasById);
router.post('/analyticoffseas', saveAnalyticoffSeas);
router.patch('/analyticoffseas/:id', updateAnalyticoffSeas);
router.delete('/analyticoffseas/:id', deleteAnalyticoffSeas);

export default router;