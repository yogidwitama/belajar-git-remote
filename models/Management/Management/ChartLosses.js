import mongoose from "mongoose";

const chartlosses = mongoose.Schema({
    sugartop: {
        type: String,
    },
    sugarlastyear: {
        type: String,
    },
    sugarnow: {
        type: String,
    },
    gaplastyearup: {
        type: String
    },
    gaplastyeardown: {
        type: String
    },
    gapnowup: {
        type: String
    },
    gapnowdown: {
        type: String
    },
    timinglastyearup: {
        type: String
    },
    timinglastyeardown: {
        type: String
    },
    timingnowup: {
        type: String
    },
    timingnowdown: {
        type: String
    },
    btclastyearup: {
        type: String
    },
    btclastyeardown: {
        type: String
    },
    btcnowup: {
        type: String
    },
    btcnowdown: {
        type: String
    },
    canefirelastyearup: {
        type: String
    },
    canefirelastyeardown: {
        type: String
    },
    canefirenowup: {
        type: String
    },
    canefirenowdown: {
        type: String
    },
    incondelivlastyearup: {
        type: String
    },
    incondelivlastyeardown: {
        type: String
    },
    incondelivnowup: {
        type: String
    },
    incondelivnowdown: {
        type: String
    },
    unknownlastyearup: {
        type: String
    },
    unknownlastyeardown: {
        type: String
    },
    unknownnowup: {
        type: String
    },
    unknownnowdown: {
        type: String
    },

},
    {
        timestamps: true // opsi timestamps
    });

export default mongoose.model('chartlosses', chartlosses);