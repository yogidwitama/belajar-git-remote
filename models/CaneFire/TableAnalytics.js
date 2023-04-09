import mongoose from "mongoose";

const tableanalyticscf = mongoose.Schema({
    rpcareaup: {
        type: String
    },
    rpctchup: {
        type: String
    },
    rpctshup: {
        type: String
    },

    rpcareaunder: {
        type: String
    },
    rpctchunder: {
        type: String
    },
    rpctshunder: {
        type: String
    },

    rpcpersen: {
        type: String
    },
    rpcsugar: {
        type: String
    },
    rpcrupiah: {
        type: String
    },

    rcareaup: {
        type: String
    },
    rctchup: {
        type: String
    },
    rctshup: {
        type: String
    },

    rcareaunder: {
        type: String
    },
    rctchunder: {
        type: String
    },
    rctshunder: {
        type: String
    },

    rcpersen: {
        type: String
    },
    rcsugar: {
        type: String
    },
    rcrupiah: {
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


export default mongoose.model('tableanalyticscf ', tableanalyticscf )