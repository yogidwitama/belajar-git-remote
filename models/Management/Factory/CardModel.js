import mongoose from "mongoose";

const Cardfactory = mongoose.Schema({
    overall: {
        type: String
    },
    overalllw: {
        type: String
    },
    overallly: {
        type: String
    },
    boil: {
        type: String
    },
    boillw: {
        type: String
    },
    boilly: {
        type: String
    },
    mill: {
        type: String
    },
    milllw: {
        type: String
    },
    millly: {
        type: String
    },
    trash: {
        type: String
    },
    trashtw: {
        type: String
    },
    trashlw: {
        type: String
    },
    down: {
        type: String
    },
    downlw: {
        type: String
    },
    downly: {
        type: String
    },
}, {
    timestamps: true
});

export default mongoose.model('Cardfactory', Cardfactory);

