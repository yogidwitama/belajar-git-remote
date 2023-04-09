import mongoose from "mongoose";

const Schema = mongoose.Schema;


const MultipleFile = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    files:[Object]
}, {timestamps: true});

export default mongoose.model('MultipleFile', MultipleFile)