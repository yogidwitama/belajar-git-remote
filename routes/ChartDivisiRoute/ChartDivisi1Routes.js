import express from "express";
import {
    getChartdivsatu,
    getChartdivsatuById,
    saveChartdivsatu,
    deleteChartdivsatu,
    updateChartdivsatu
} from "../../controllers/ChartDivisi/ChartDivisi1Controller.js";

const router = express.Router();

router.get('/chartdiv1plan', getChartdivsatu);
router.get('/chartdiv1plan/:id', getChartdivsatuById);
router.post('/chartdiv1plan', saveChartdivsatu);
router.patch('/chartdiv1plan/:id', updateChartdivsatu);
router.delete('/chartdiv1plan/:id', deleteChartdivsatu);

export default router;