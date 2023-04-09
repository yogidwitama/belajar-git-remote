import mongoose from "mongoose";

const geoJsonUploadPreEmerBlack = mongoose.Schema({
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


export default mongoose.model("geoJsonUploadPreEmerBlack", geoJsonUploadPreEmerBlack)