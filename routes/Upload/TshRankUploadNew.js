import { uploadCsv } from "../../controllers/UploadController/NewTshRank.js";
import multer from "multer";
import express from "express";
import tshUploadNew from "../../models/UploadCSV/Management/TshRankNew.js"

const router =express.Router();

// configure Multer for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });
  
  // define route for file upload
  router.post('/uploadvsc', upload.single('file'), async (req, res) => {
    try {
      // read CSV file using csvtojson library
      const jsonArray = await csvtojson().fromFile(req.file.path);
      // create a new data document for each row in the CSV file
      for (const obj of jsonArray) {
        const data = new tshUploadNew({
          title: obj.title,
          object: {
            no: obj.no,
            name: obj.name,
          },
        });
        await data.save();
      }
  
      res.send('File uploaded successfully!');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  });

export default router