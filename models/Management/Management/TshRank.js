import mongoose from "mongoose";

const tshrank = mongoose.Schema({
    position:{
        type: String,

    },
    estate:{
        type: String,
     
    },
    division:{
        type: String,
 
    },
    ha:{
        type: String,

    },
    tch:{
        type: String,
     
    },
    rendement:{
        type: String,
 
    },
    esttsh:{
        type: String,
 
    },
    weekupdate:{
        type: String,
 
    }
});

export default mongoose.model('tshrank ', tshrank);