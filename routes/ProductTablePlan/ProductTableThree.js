import express from "express";
import {
    getProductThree ,
    getProductThreeById,
    saveProductThree ,
    deleteProductThree ,
    updateProductThree 
} from "../../controllers/PlantationTable/ProductionTablethreee.js";

const router = express.Router();

router.get('/chartproductthree', getProductThree );
router.get('/chartproductthree/:id', getProductThreeById);
router.post('/chartproductthree', saveProductThree );
router.patch('/chartproductthree/:id', updateProductThree );
router.delete('/chartproductthree/:id', deleteProductThree );

export default router;