import express from "express";
import {
    getProductnow ,
    getProductnowById,
    saveProductnow ,
    deleteProductnow ,
    updateProductnow 
} from "../../controllers/PlantationTable/ProductionTablenow.js";

const router = express.Router();

router.get('/chartproductnow', getProductnow );
router.get('/chartproductnow/:id', getProductnowById);
router.post('/chartproductnow', saveProductnow );
router.patch('/chartproductnow/:id', updateProductnow );
router.delete('/chartproductnow/:id', deleteProductnow );

export default router;