import mongoose from "mongoose";

const plantingtractor = mongoose.Schema({

    plantingtodate: {
        type: String
    },
    plantingsatu: {
        type: String
    },
    plantingdua: {
        type: String
    },
    plantingtiga: {
        type: String
    },
    plantingempat: {
        type: String
    },
    plantinglima: {
        type: String
    },
   
    traktorsatu: {
        type: String
    },
    traktordua: {
        type: String
    },
    traktortiga: {
        type: String
    },
    traktorempat: {
        type: String
    },
    traktorlima: {
        type: String
    },
   
    irigasisatu: {
        type: String
    },
    irigasidua: {
        type: String
    },
    irigasitiga: {
        type: String
    },
    irigasiempat: {
        type: String
    },
    irigasilima: {
        type: String
    },
   
    yearsperiode: {
        type: String
    },
    monthnow:{
        type:String
    }

});


export default mongoose.model('plantingtractor', plantingtractor)