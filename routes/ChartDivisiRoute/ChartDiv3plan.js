import express from "express";
import {
    getChartplan3 ,
    getChartplan3ById,
    saveChartplan3 ,
    deleteChartplan3 ,
    updateChartplan3 
} from "../../controllers/ChartDivisi/ChartDiv3Plan.js";

const router = express.Router();

router.get('/chartdiv3plan', getChartplan3 );
router.get('/chartdiv3plan/:id', getChartplan3ById);
router.post('/chartdiv3plan', saveChartplan3 );
router.patch('/chartdiv3plan/:id', updateChartplan3 );
router.delete('/chartdiv3plan/:id', deleteChartplan3 );

export default router;