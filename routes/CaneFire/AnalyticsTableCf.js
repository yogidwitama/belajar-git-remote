import express from "express";
import {
    getAnalyticCf,
    getAnalyticCfById,
    saveAnalyticCf,
    deleteAnalyticCf,
    updateAnalyticCf
} from "../../controllers/CaneFire/TableAnalyticsCf.js";

const router = express.Router();

router.get('/analyticcf', getAnalyticCf);
router.get('/analyticcf/:id', getAnalyticCfById);
router.post('/analyticcf', saveAnalyticCf);
router.patch('/analyticcf/:id', updateAnalyticCf);
router.delete('/analyticcf/:id', deleteAnalyticCf);

export default router;