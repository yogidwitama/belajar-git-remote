import mongoose from "mongoose";

const analyticoffseason = mongoose.Schema({
    rpcarea: {
        type: String
    },
    rpctsh: {
        type: String
    },
    rpcsugar: {
        type: String
    },
    rpcrp: {
        type: String
    },
    rcarea: {
        type: String
    },
    rctsh: {
        type: String
    },
    rcsugar: {
        type: String
    },
    rcrp: {
        type: String
    },
    totalosses:{
        type:String
    },

    periode: {
        type: String
    }

});


export default mongoose.model('analyticoffseason', analyticoffseason)