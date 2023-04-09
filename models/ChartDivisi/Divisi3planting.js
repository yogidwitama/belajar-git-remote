import mongoose from "mongoose";

const chartdiv3plan = mongoose.Schema({

  januari: {
    type: String
  },
  februari: {
    type: String
  },
  maret: {
    type: String
  },
  april: {
    type: String
  },
  mei: {
    type: String
  },
  juni: {
    type: String
  },
  juli: {
    type: String
  },
  agustus: {
    type: String
  },
  september: {
    type: String
  },
  oktober: {
    type: String
  },
  november: {
    type: String
  },
  desember: {
    type: String
  },
  januarinext: {
    type: String
  },
  februarinext: {
    type: String
  },
  maretnext: {
    type: String
  },
  aprilnext: {
    type: String
  },
  meinext: {
    type: String
  },
  juninext: {
    type: String
  },
  julinext: {
    type: String
  },
  agustusnext: {
    type: String
  },
  septembernext: {
    type: String
  },
  oktobernext: {
    type: String
  },
  novembernext: {
    type: String
  },
  desembernext: {
    type: String
  },
});


export default mongoose.model('chartdiv3plan', chartdiv3plan)