import express from "express";
import {
    getCharttch5,
    getCharttch5ById,
    saveCharttch5,
    deleteCharttch5,
    updateCharttch5
} from "../../controllers/ChartDivisiTch/ChartDiv5Tch.js";

const router = express.Router();

router.get('/chartdiv5tch', getCharttch5);
router.get('/chartchartdiv5tch/:id', getCharttch5ById);
router.post('/chartchartdiv5tch', saveCharttch5);
router.patch('/chartchartdiv5tch/:id', updateCharttch5);
router.delete('/chartchartdiv5tch/:id', deleteCharttch5);

export default router;