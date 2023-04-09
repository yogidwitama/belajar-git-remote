import express from "express";
import {
    getSumLossCF,
    getSumLossCFById,
    saveSumLossCF,
    deleteSumLossCF,
    updateSumLossCF
} from "../../controllers/CaneFire/SummaryLossesCF.js";

const router = express.Router();

router.get('/sumlosscf', getSumLossCF);
router.get('/sumlosscf/:id', getSumLossCFById);
router.post('/sumlosscf', saveSumLossCF);
router.patch('/sumlosscf/:id', updateSumLossCF);
router.delete('/sumlosscf/:id', deleteSumLossCF);

export default router;