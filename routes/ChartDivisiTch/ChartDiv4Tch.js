import express from "express";
import {
    getCharttch4,
    getCharttch4ById,
    saveCharttch4,
    deleteCharttch4,
    updateCharttch4
} from "../../controllers/ChartDivisiTch/ChartDiv4Tch.js";

const router = express.Router();

router.get('/chartdiv4tch', getCharttch4);
router.get('/chartchartdiv4tch/:id', getCharttch4ById);
router.post('/chartchartdiv4tch', saveCharttch4);
router.patch('/chartchartdiv4tch/:id', updateCharttch4);
router.delete('/chartchartdiv4tch/:id', deleteCharttch4);

export default router;