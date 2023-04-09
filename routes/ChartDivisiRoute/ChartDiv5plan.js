import express from "express";
import {
    getChartplan5  ,
    getChartplan5ById,
    saveChartplan5  ,
    deleteChartplan5  ,
    updateChartplan5  
} from "../../controllers/ChartDivisi/ChartDiv5Plan.js";

const router = express.Router();

router.get('/chartdiv5plan', getChartplan5  );
router.get('/chartdiv5plan/:id', getChartplan5ById);
router.post('/chartdiv5plan', saveChartplan5  );
router.patch('/chartdiv5plan/:id', updateChartplan5  );
router.delete('/chartdiv5plan/:id', deleteChartplan5  );

export default router;