import express from "express";
import { 
    getAll,
    getById,
    save,
    update,
    deleted,
    search
} from "../../../controllers/Management/Management/MasterController.js";

const router = express.Router();

router.get('/master', getAll);
router.get('/master/:id', getById);
router.post('/master', save);
router.patch('/master/:id', update);
router.delete('/master/:id', deleted);
router.post('/search', search);

export default router;