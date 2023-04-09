import express from "express";
import {
    getChartLosses,
    getChartLossesById,
    saveChartLosses,
    updateChartLosses,
    deleteChartLosses,

} from "../../../controllers/Management/Management/ChartLosses.js";

const router = express.Router();

router.get('/ChartLosses', getChartLosses);
router.get('/ChartLosses/:id', getChartLossesById);
router.post('/ChartLosses', saveChartLosses);
router.patch('/ChartLosses/:id', updateChartLosses);
router.delete('/ChartLosses/:id', deleteChartLosses);


export default router;