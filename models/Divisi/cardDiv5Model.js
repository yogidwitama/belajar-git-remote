import mongoose from "mongoose";

const carddiv5 = mongoose.Schema({

  tshrank: {
    type: String
  },
  tshrankbln: {
    type: String
  },
  allrank: {
    type: String
  },
  gpmrank: {
    type: String
  },
  hacutting: {
    type: String
  },
  hacutcap: {
    type: String
  },
  hacutbln: {
    type: String
  },
  sugarresult: {
    type: String
  },
  sugarresbln: {
    type: String
  },
  tch: {
    type: String
  },
  rendement: {
    type: String
  },
  esttsh: {
    type: String
  },
  planting: {
    type: String
  },
  plantingbln: {
    type: String
  },
  capacity: {
    type: String
  },
  totalha: {
    type: String
  },
  avgger: {
    type: String
  },
  avggerbln: {
    type: String
  },
  rpc: {
    type: String
  },
  r5: {
    type: String
  },
  r2: {
    type: String
  },
  r3: {
    type: String
  },
  r4: {
    type: String
  },
  redflag: {
    type: String
  },
  glifosat: {
    type: String
  },
  plough: {
    type: String
  },
  plant: {
    type: String
  },
  preemg: {
    type: String
  },
  fertil: {
    type: String
  },
  weeds: {
    type: String
  },
  weedlow: {
    type: String
  },
  weedmed: {
    type: String
  },
  weedhigh: {
    type: String
  },
  weedsbln: {
    type: String
  },
  ongoing: {
    type: String
  },
  lastweek: {
    type: String
  }
});


export default mongoose.model('carddiv5', carddiv5)