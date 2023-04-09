import express from "express";
import {
    getCharttch2,
    getCharttch2ById,
    saveCharttch2,
    deleteCharttch2,
    updateCharttch2
} from "../../controllers/ChartDivisiTch/ChartDiv2Tch.js";

const router = express.Router();

router.get('/chartdiv2tch', getCharttch2);
router.get('/chartchartdiv2tch/:id', getCharttch2ById);
router.post('/chartchartdiv2tch', saveCharttch2);
router.patch('/chartchartdiv2tch/:id', updateCharttch2);
router.delete('/chartchartdiv2tch/:id', deleteCharttch2);

export default router;