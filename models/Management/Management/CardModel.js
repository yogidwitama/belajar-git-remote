import mongoose from "mongoose";

const Card = mongoose.Schema({
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
    tshtodate: {
        type: String,
    },
    tshlw: {
        type: String,
    },
    tshly: {
        type: String,
    },
    sugartodate: {
        type: String,
    },
    sugarlw: {
        type: String,
    },
    sugarly: {
        type: String,
    },
    tshprojection: {
        type: String,
    },
    tshprojectionly: {
        type: String,
    },
    sugarprojection: {
        type: String,
    },
    sugarprojectionly: {
        type: String,
    },
    rendementtodate: {
        type: String,
    },
    rendemently: {
        type: String,
    },
},
    {
        timestamps: true // opsi timestamps
    });

export default mongoose.model('Cards', Card);