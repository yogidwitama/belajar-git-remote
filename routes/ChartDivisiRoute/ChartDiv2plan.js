import express from "express";
import {
    getChartplan2 ,
    getChartplan2ById,
    saveChartplan2 ,
    deleteChartplan2 ,
    updateChartplan2 
} from "../../controllers/ChartDivisi/ChartDivisi2Plan.js";

const router = express.Router();

router.get('/chartdiv2plan', getChartplan2 );
router.get('/chartdiv2plan/:id', getChartplan2ById);
router.post('/chartdiv2plan', saveChartplan2 );
router.patch('/chartdiv2plan/:id', updateChartplan2 );
router.delete('/chartdiv2plan/:id', deleteChartplan2 );

export default router;