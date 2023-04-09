import express from "express";
import {
    getFactorydowntime,
    getFactorydowntimeById,
    saveFactorydowntime,
    updateFactorydowntime,
    deleteFactorydowntime
} from "../../controllers/Factory/FactoryGpm.js";

const router = express.Router();

router.get('/factorydt', getFactorydowntime );
router.get('/factorydt/:id', getFactorydowntimeById);
router.post('/factorydt', saveFactorydowntime );
router.post('/factorydt/:id', updateFactorydowntime );
router.delete('/factorydt/:id', deleteFactorydowntime );

export default router;