import express from "express";
import { upload } from "../../helpers/fileHelper.js";
import {
    singleFileUpload,
    multipleFileUpload,
    getAllMultipleFiles,
    getAllSingleFiles
} from "../../controllers/ControllerTest/fileUploaderControllers.js";

const router =express.Router();

router.post('/singlefile', upload.single('file'), singleFileUpload);
router.post('/multiplefiles', upload.array('files'), multipleFileUpload);
router.get('/getsinglefile', getAllSingleFiles);
router.get('/getmultiplefiles', getAllMultipleFiles);

export default router