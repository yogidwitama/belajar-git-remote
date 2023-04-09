import { UploaderCsv,
deleteCsv,
getAllCsv,
getCsvByYearMonth} from "../../controllers/Uploader/germinasiUploader.js"
import express from "express";
import multer from "multer";



const router =express.Router();
const upload = multer ({storage: multer.memoryStorage()});

router.post("/germinasiuploader", upload.single("file"), UploaderCsv);
router.delete("/germinasiuploaderdel/:id", deleteCsv);
router.get("/germinasiall", getAllCsv);
router.get("/germinasicsvyear", getCsvByYearMonth)




export default router
