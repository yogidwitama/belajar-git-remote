
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import fs from "fs";
import multer from "multer";
import csvtojson from "csvtojson"
import parse from "csv-parser";
import csv from "csv-parser"


import Cardroute from "./routes/Management/Management/CardRoute.js";
import Div1Routes from "./routes/Divisi/Div1Routes.js";
import Div2Routes from "./routes/Divisi/Div2Routes.js";
import Div3Routes from "./routes/Divisi/Div3Routes.js";
import Div4Routes from "./routes/Divisi/Div4Routes.js";
import Div5Routes from "./routes/Divisi/Div5Routes.js";
import Chartroute from "./routes/ChartRoute.js";
import AggRoutes from "./routes/AggRoutes.js";
import MasterRoute from "./routes/Management/Management/MasterRoute.js";
import Factory from "./routes/Management/Factory/FactoryRoutes.js";
import ChartDivisi1Route from "./routes/ChartDivisiRoute/ChartDivisi1Routes.js";
import ChartDiv2plan from "./routes/ChartDivisiRoute/ChartDiv2plan.js";
import ChartDiv3plan from "./routes/ChartDivisiRoute/ChartDiv3plan.js";
import ChartDiv4plan from "./routes/ChartDivisiRoute/ChartDiv4plan.js";
import ChartDiv5plan from "./routes/ChartDivisiRoute/ChartDiv5plan.js";


import ChartDiv1harv from "./routes/ChartDivisiHarvesting/ChartDiv1harv.js";
import ChartDiv2harv from "./routes/ChartDivisiHarvesting/ChartDiv2harv.js";
import ChartDiv3harv from "./routes/ChartDivisiHarvesting/ChartDiv3harv.js";
import ChartDiv4harv from "./routes/ChartDivisiHarvesting/ChartDiv4harv.js";
import ChartDiv5harv from "./routes/ChartDivisiHarvesting/ChartDiv5harv.js";


import CardHarvestingGpm from "./routes/Harvestinggpm/CardHarvestinggpm.js";
import AreaharvestingGpm from "./routes/Harvestinggpm/CardHarvestinggpm.js";

import FactoryDt from "./routes/Factory/FactoryGpm.js";
import ChartFactoryDtvsBhr from "./routes/Factory/ChartDtvsBhr.js"

import TableProductPlan from "./routes/ProductTablePlan/ProductTableThree.js";
import TableProductPlannow from "./routes/ProductTablePlan/ProductTableNow.js";
import PlantingTractor from "./routes/ProductTablePlan/PlantationTractor.js";


import ChartDiv1Tch from "./routes/ChartDivisiTch/ChartDiv1Tch.js";
import ChartDiv2Tch from "./routes/ChartDivisiTch/ChartDiv2Tch.js";
import ChartDiv3Tch from "./routes/ChartDivisiTch/ChartDiv3Tch.js";
import ChartDiv4Tch from "./routes/ChartDivisiTch/ChartDiv4Tch.js";
import ChartDiv5Tch from "./routes/ChartDivisiTch/ChartDiv5Tch.js";

import ChartLosses from "./routes/Management/Management/ChartLosses.js"


import TshRankRoute from "./routes/Management/Management/TshRankRoute.js"

import CaneFireSummary from "./routes/CaneFire/SumCfRoutes.js"
import CaneFireAnalytics from "./routes/CaneFire/AnalyticsTableCf.js";
import CaneFireAnalyticoffseas from "./routes/CaneFire/AnalyticsTableoffSeasCF.js";


import TshrankUploader from "./routes/Upload/TshRankupload.js";
import CsvTest from "./routes/Upload/TshRankUploadNew.js"
import { timeStamp } from "console";

// // uploads
// import uploadfiles from "./routes/TestRoute/fileUploadRoutes.js"

// uploader
import germinasiuploader from "./routes/Upload/germinasiUploader.js" 


// uploadgeojson 
import Harvested from "./routes/GeoJSONuploader/Harvesting/HarvestedRoutes.js"
import SeedCane from "./routes/GeoJSONuploader/Harvesting/SeedCaneRoutes.js"
import FerNotLates from "./routes/GeoJSONuploader/Divisi/Fertilize/FerNotLateRoute.js"
import FerRedFlags from "./routes/GeoJSONuploader/Divisi/Fertilize/FerRedFlagRoute.js";
import GlifReds from "./routes/GeoJSONuploader/Divisi/Glifosat/GlifRedRoute.js";
import GlifNotLates from "./routes/GeoJSONuploader/Divisi/Glifosat/GlifNotLate.js";
import PlanNotLates from "./routes/GeoJSONuploader/Divisi/Planting/PlanNotLateRoute.js";
import PlantingReds from "./routes/GeoJSONuploader/Divisi/Planting/PlanRedRoute.js";
import PloughNotLates from "./routes/GeoJSONuploader/Divisi/Ploughing/PloughNotLateRoute.js";
import PloughReds from "./routes/GeoJSONuploader/Divisi/Ploughing/PloughRedRoute.js";
import PreEmerBlacks from "./routes/GeoJSONuploader/Divisi/PreEmergence/PreEmerBlack.js";
import PreEmerNotLates from "./routes/GeoJSONuploader/Divisi/PreEmergence/PreEmerNotLateRoute.js";
import PreEmerReds from "./routes/GeoJSONuploader/Divisi/PreEmergence/PreEmerRedRoute.js";
import CaneFires from "./routes/GeoJSONuploader/CaneFire/CaneFireRoutes.js";
import MasterCurrents from "./routes/GeoJSONuploader/MasterList/MasterCurrentRoute.js";
import MasterFutureS from "./routes/GeoJSONuploader/MasterList/MasterFutureRoute.js";

// update week belum
import WeekUpdated from "./routes/WeekUpdate/WeekUpdateRoutes.js"


dotenv.config();

const app = express();


app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000', 'https://sgc-analytics.com', 'https://sgc-analytics.website'],
}));

app.use(bodyParser.json({ limit: '100mb', extended: false }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: false }));



app.use(express.json());
app.use(Cardroute);
app.use(Div1Routes);
app.use(Div2Routes);
app.use(Div3Routes);
app.use(Div4Routes);
app.use(Div5Routes);
app.use(Chartroute);
app.use(AggRoutes);
app.use(MasterRoute);
app.use(Factory);


// chart planting
app.use(ChartDivisi1Route);
app.use(ChartDiv2plan);
app.use(ChartDiv3plan);
app.use(ChartDiv4plan);
app.use(ChartDiv5plan);

// chart harvesting
app.use(ChartDiv1harv);
app.use(ChartDiv2harv);
app.use(ChartDiv3harv);
app.use(ChartDiv4harv);
app.use(ChartDiv5harv);

// harvesting
app.use(CardHarvestingGpm);
app.use(AreaharvestingGpm);

// Factory
app.use(FactoryDt);
app.use(ChartFactoryDtvsBhr)

// plantion table
app.use(TableProductPlan);
app.use(TableProductPlannow);
app.use(PlantingTractor);


// tchdivisi
app.use(ChartDiv1Tch);
app.use(ChartDiv2Tch);
app.use(ChartDiv3Tch);
app.use(ChartDiv4Tch);
app.use(ChartDiv5Tch);


app.use(TshRankRoute);


// CaneFire
app.use(CaneFireSummary)
app.use(CaneFireAnalytics)
app.use(CaneFireAnalyticoffseas)

// uploader
app.use(TshrankUploader);
app.use(CsvTest);
app.use(germinasiuploader);

// geojson uploader
app.use(Harvested);
app.use(SeedCane);
app.use(FerNotLates);
app.use(FerRedFlags);
app.use(GlifReds);
app.use(GlifNotLates);
app.use(PlanNotLates);
app.use(PlantingReds);
app.use(PloughNotLates);
app.use(PloughReds);
app.use(PreEmerBlacks);
app.use(PreEmerNotLates);
app.use(PreEmerReds);
app.use(CaneFires);
app.use(MasterCurrents);
app.use(MasterFutureS);


// week updated
app.use(WeekUpdated)

const port = process.env.PORT;

const connectDB = (url) => {
  return mongoose.connect(url)
}

const GeoJSONSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  geojson: {
    type: Buffer,
    required: true,
  },
}, { timestamps: true });

const GeoJSONModel = mongoose.model('GeoJSONModel', GeoJSONSchema);

// Middleware untuk menangani proses upload file CSV
// const upload = multer({ storage: multer.memoryStorage() });

// app.post('/uploadcsv', upload.single('file'), async (req, res) => {
//   try {
//     const csv = new CsvModel({
//       name: req.body.name,
//       file: req.file.buffer
//     });

//     await csv.save();

//     res.status(200).send('File uploaded successfully');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('File upload failed');
//   }
// });


// app.get('/csv/:id', async (req, res) => {
//   try {
//     const csv = await CsvModel.findById(req.params.id);

//     if (!csv) {
//       return res.status(404).send('CSV not found');
//     }

//     res.status(200).send(csv.file.toString());
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Failed to retrieve CSV');
//   }
// });

// app.get('/csv', async (req, res) => {
//   try {
//     const csvs = await CsvModel.find();
//     const jsonData = csvs.map(csv => {
//       const rows = csv.file.toString().split('\n');
//       const headers = rows[0].split(',');
//       const data = rows.slice(1).filter(row => row.trim() !== '').map(row => {
//         const values = row.split(',');
//         return headers.reduce((obj, header, index) => {
//           obj[header.trim()] = values[index] ? values[index].trim() : null;
//           return obj;
//         }, {});
//       });
//       return {
//         id: csv._id,
//         name: csv.name,
//         createdAt: csv.createdAt,
//         data
//       };
//     });
//     res.status(200).json(jsonData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Failed to retrieve CSVs');
//   }
// });

// app.delete('/csv/:id', async (req, res) => {
//   try {
//     const csv = await CsvModel.findByIdAndDelete(req.params.id);

//     if (!csv) {
//       return res.status(404).send('CSV not found');
//     }

//     res.status(200).send('CSV deleted successfully');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Failed to delete CSV');
//   }
// });

// geojson upload
// multer
const upload = multer({
  storage:multer.memoryStorage(),
  limits:{fileSize:100000000},
  fileFilter: (req, file, cb) =>{
    if(file.mimetype=== "application/json"){
      cb(null, true)
    }else{
      cb(new Error("file must be in JSON"), false)
    }
  }
}).single("file")

app.post("/uploadjson", (req, res)=>{
  try {
    upload(req, res, async (err)=>{
      if (err){
        console.error(err);
        res.status(400).send({error:err.message})
      }else{
        const data =JSON.parse(req.file.buffer.toString())
      
        const geojson = new GeoJSONModel({
          name: req.file.originalname,
          geojson: req.file.buffer
        });

        await geojson.save();
        console.log("file susccess uploaded");
        res.status(200).send({message:"Data Saved"})
      }
    })
  } catch (error) {
    console.error(error);
    res.status(500).send({error:"error upload"})
  }
})

app.get('/geojson', async (req, res) => {
  try {
    const geojsons = await GeoJSONModel.find();
    const jsonData = geojsons.map(geojson => {
      const data = JSON.parse(geojson.geojson.toString());
      return {
        id: geojson._id,
        name: geojson.name,
        createdAt: geojson.createdAt,
        data
      };
    });
    res.status(200).json(jsonData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to retrieve GeoJSON data');
  }
});

app.get('/geojsonbuffer', async (req, res) => {
  try {
    const geojsons = await GeoJSONModel.find({}, { id: 1, name: 1, createdAt: 1 });
    res.status(200).json(geojsons);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to retrieve GeoJSONs');
  }
});

app.delete('/geojsondel/:id', async (req, res) => {
  try {
    const geojson = await GeoJSONModel.findById(req.params.id);
    if (!geojson) {
      return res.status(404).send({ error: 'GeoJSON not found' });
    }
    await geojson.remove();
    res.status(200).send({ message: 'GeoJSON deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to delete GeoJSON' });
  }
});



const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Connected, Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();