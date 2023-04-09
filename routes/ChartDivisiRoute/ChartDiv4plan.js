import express from "express";
import {
    getChartplan4 ,
    getChartplan4ById,
    saveChartplan4 ,
    deleteChartplan4 ,
    updateChartplan4 
} from "../../controllers/ChartDivisi/ChartDiv4Plan.js";

const router = express.Router();

router.get('/chartdiv4plan', getChartplan4 );
router.get('/chartdiv4plan/:id', getChartplan4ById);
router.post('/chartdiv4plan', saveChartplan4 );
router.patch('/chartdiv4plan/:id', updateChartplan4 );
router.delete('/chartdiv4plan/:id', deleteChartplan4 );

export default router;