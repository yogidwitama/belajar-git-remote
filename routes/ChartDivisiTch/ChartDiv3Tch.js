import express from "express";
import {
    getCharttch3,
    getCharttch3ById,
    saveCharttch3,
    deleteCharttch3,
    updateCharttch3
} from "../../controllers/ChartDivisiTch/ChartDiv3Tch.js";

const router = express.Router();

router.get('/chartdiv3tch', getCharttch3);
router.get('/chartchartdiv3tch/:id', getCharttch3ById);
router.post('/chartchartdiv3tch', saveCharttch3);
router.patch('/chartchartdiv3tch/:id', updateCharttch3);
router.delete('/chartchartdiv3tch/:id', deleteCharttch3);

export default router;