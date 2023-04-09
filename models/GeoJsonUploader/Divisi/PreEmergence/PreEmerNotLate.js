import mongoose from "mongoose";

const geoJsonUploadPreEmerNotLat = mongoose.Schema({
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


export default mongoose.model("geoJsonUploadPreEmerNotLat", geoJsonUploadPreEmerNotLat)