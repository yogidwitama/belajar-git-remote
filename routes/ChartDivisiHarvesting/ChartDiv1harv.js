import express from "express";
import {
    getChartharv1,
    getChartharv1ById,
    saveChartharv1,
    deleteChartharv1,
    updateChartharv1
} from "../../controllers/ChartDivisiHarvesting/ChartDiv1Harv.js";

const router = express.Router();

router.get('/chartdiv1harv', getChartharv1);
router.get('/chartdiv1harv/:id', getChartharv1ById);
router.post('/chartdiv1harv', saveChartharv1);
router.patch('/chartdiv1harv/:id', updateChartharv1);
router.delete('/chartdiv1harv/:id', deleteChartharv1);

export default router;