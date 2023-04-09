import mongoose from "mongoose";

const geoJsonUploadMasterListFuture = mongoose.Schema({
    name: {
        type: String
    },
    author: {
        type: String
    },
    geojson: {
        type: Buffer,
        required: true
    }
}, { timestamps: true })

export default mongoose.model("geoJsonUploadMasterListFuture", geoJsonUploadMasterListFuture);
