import express from "express";
import { 
    getCharts, 
    getChartById,
    saveChart,
    updateChart,
    deleteChart
} from "../controllers/ChartController.js";

const router = express.Router();

router.get('/charts', getCharts);
router.get('/charts/:id', getChartById);
router.post('/charts', saveChart);
router.patch('/charts/:id', updateChart);
router.delete('/charts/:id', deleteChart);

export default router; 