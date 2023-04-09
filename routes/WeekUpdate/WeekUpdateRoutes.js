import express from "express";
import {
    getWeek,
    updatedWeak,
    AddWeeks
} from "../../controllers/weekUpdate/weekUpdate.js"

const router = express.Router();


router.get("/updateweek", getWeek);
router.post("/updateweek", updatedWeak);
router.post("/addweek",AddWeeks)

export default router