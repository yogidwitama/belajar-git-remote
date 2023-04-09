import mongoose from "mongoose";

const HarvestedgeoJsonUplod = mongoose.Schema({
    author: {
        type: String,
     
    },
    name: {
        type: String,
       
    },
    geojson: {
        type: Buffer,
      required: true
    }
}, { timestamps: true });


export default mongoose.model("HarvestedgeoJsonUplod", HarvestedgeoJsonUplod);
