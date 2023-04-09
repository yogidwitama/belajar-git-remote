import express from "express";
import {
    getCharttch1,
    getCharttch1ById,
    saveCharttch1,
    deleteCharttch1,
    updateCharttch1
} from "../../controllers/ChartDivisiTch/ChartDiv1Tch.js";

const router = express.Router();

router.get('/chartdiv1tch', getCharttch1);
router.get('/chartchartdiv1tch/:id', getCharttch1ById);
router.post('/chartchartdiv1tch', saveCharttch1);
router.patch('/chartchartdiv1tch/:id', updateCharttch1);
router.delete('/chartchartdiv1tch/:id', deleteCharttch1);

export default router;