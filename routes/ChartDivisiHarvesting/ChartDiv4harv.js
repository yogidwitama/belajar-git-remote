import express from "express";
import {
    getChartharv4,
    getChartharv4ById,
    saveChartharv4,
    deleteChartharv4,
    updateChartharv4
} from "../../controllers/ChartDivisiHarvesting/ChartDiv4Harv.js";

const router = express.Router();

router.get('/chartdiv4harv', getChartharv4);
router.get('/chartdiv4harv/:id', getChartharv4ById);
router.post('/chartdiv4harv', saveChartharv4);
router.patch('/chartdiv4harv/:id', updateChartharv4);
router.delete('/chartdiv4harv/:id', deleteChartharv4);

export default router;