import express from "express";
import {
    getChartharv3,
    getChartharv3ById,
    saveChartharv3,
    deleteChartharv3,
    updateChartharv3
} from "../../controllers/ChartDivisiHarvesting/ChartDiv3Harv.js";

const router = express.Router();

router.get('/chartdiv3harv', getChartharv3);
router.get('/chartdiv3harv/:id', getChartharv3ById);
router.post('/chartdiv3harv', saveChartharv3);
router.patch('/chartdiv3harv/:id', updateChartharv3);
router.delete('/chartdiv3harv/:id', deleteChartharv3);

export default router;