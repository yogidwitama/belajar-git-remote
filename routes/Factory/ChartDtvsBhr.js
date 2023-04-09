import express from "express";
import {
 getDtvsBhr,
 getDtvsBhrById,
 saveDtvsBhr,
 deleteDtvsBhr,
 updateDtvsBhr
} from "../../controllers/Factory/ChartFactorydtvsbhr.js";

const router = express.Router();

router.get('/chartdtfactory', getDtvsBhr);
router.get('/chartdtfactory/:id', getDtvsBhrById);
router.post('/chartdtfactory', saveDtvsBhr);
router.patch('/chartdtfactory/:id', updateDtvsBhr);
router.delete('/chartdtfactory/:id', deleteDtvsBhr);

export default router;