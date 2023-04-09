import mongoose from "mongoose";

const weekUpdate = mongoose.Schema({
    ongoingweek: {
        type: String
    },
    updateweek: {
        type: String
    }
},{timestamps: true});

export default mongoose.model("weekUpdate", weekUpdate)