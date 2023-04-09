import mongoose from "mongoose";

const cardharvestinggpm = mongoose.Schema({
    runday: {
        type: String,
    },
    millday: {
        type: String,
    },
    tchtodate: {
        type: String,
    },
    tchlw: {
        type: String,
    },
    tchly: {
        type: String,
    },
    balancetodate: {
        type: String,
    },
    balancelw: {
        type: String,
    },
    balancely: {
        type: String,
    },
    capacitytodate: {
        type: String,
    },
    capacitylw: {
        type: String,
    },
    capacityly: {
        type: String,
    },
   
},
    {
        timestamps: true // opsi timestamps
    });

export default mongoose.model('cardharvestinggpm',cardharvestinggpm);