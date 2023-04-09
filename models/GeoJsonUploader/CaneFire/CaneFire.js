import mongoose from "mongoose";

const geoJsonUploadCaneFire = mongoose.Schema({
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


export default mongoose.model("geoJsonUploadCaneFire", geoJsonUploadCaneFire);