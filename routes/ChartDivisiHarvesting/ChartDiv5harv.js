import express from "express";
import {
    getChartharv5,
    getChartharv5ById,
    saveChartharv5,
    deleteChartharv5,
    updateChartharv5
} from "../../controllers/ChartDivisiHarvesting/ChartDiv5Harv.js";

const router = express.Router();

router.get('/chartdiv5harv', getChartharv5);
router.get('/chartdiv5harv/:id', getChartharv5ById);
router.post('/chartdiv5harv', saveChartharv5);
router.patch('/chartdivharv/:id', updateChartharv5);
router.delete('/chartdiv5harv/:id', deleteChartharv5);

export default router;