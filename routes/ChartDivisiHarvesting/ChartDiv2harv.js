import express from "express";
import {
    getChartharv2,
    getChartharv2ById,
    saveChartharv2,
    deleteChartharv2,
    updateChartharv2
} from "../../controllers/ChartDivisiHarvesting/ChartDiv2Harv.js";

const router = express.Router();

router.get('/chartdiv2harv', getChartharv2);
router.get('/chartdiv2harv/:id', getChartharv2ById);
router.post('/chartdiv2harv', saveChartharv2);
router.patch('/chartdiv2harv/:id', updateChartharv2);
router.delete('/chartdiv2harv/:id', deleteChartharv2);

export default router;