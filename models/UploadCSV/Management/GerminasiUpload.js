import mongoose from "mongoose";

const germinasiUplod= mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    file:{
        type: Buffer,
        required: true
    }
},{timestamps: true});


export default mongoose.model("germinasiUpload", germinasiUplod);
