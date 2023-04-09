import mongoose from "mongoose";

const Chart = mongoose.Schema({
    labels: {
        type: [String],
        required: true
    },
    data: {
        type: [Number],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('chart', Chart);