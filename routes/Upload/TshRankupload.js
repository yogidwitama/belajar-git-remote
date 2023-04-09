import { TshUpload } from "../../controllers/UploadController/TshRankUpload.js";
import express from "express";
import multer from "multer";


const upload =multer({dest:"uploads/"})
const router =express.Router();


router.post('/tshupload',upload.single('file'), TshUpload);


export default router
