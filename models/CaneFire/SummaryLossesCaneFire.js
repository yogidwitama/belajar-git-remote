import mongoose from "mongoose";

const summarycf = mongoose.Schema({
    areaunder10: {
        type: String
    },
    cfunder10: {
        type: String
    },
    sugarlosunder10: {
        type: String
    },
    losrpunder10: {
        type: String
    },
    areaseason: {
        type: String
    },
    cfseason: {
        type: String
    },
    sugarlosseason: {
        type: String
    },
    losrpseason: {
        type: String
    },
    totalsugar:{
        type:String
    },
    totalosses:{
        type:String
    },

    periode: {
        type: String
    }

});


export default mongoose.model('summarycf', summarycf)