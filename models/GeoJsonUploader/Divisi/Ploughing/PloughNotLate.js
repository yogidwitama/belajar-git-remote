import mongoose from "mongoose";

const geoJsonUploadPloughNotLat = mongoose.Schema({
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


export default mongoose.model("geoJsonUploadPloughNotLat", geoJsonUploadPloughNotLat)