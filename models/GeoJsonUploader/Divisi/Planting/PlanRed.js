import mongoose from "mongoose";

const geoJsonUploadPlanRed = mongoose.Schema({
    author:{
        type:String
    },
    name:{
        type: String
    },
    geojson:{
        type: Buffer,
        required: true
    }
}, {timestamps: true});


export default mongoose.model("geoJsonUploadPlanRed", geoJsonUploadPlanRed)