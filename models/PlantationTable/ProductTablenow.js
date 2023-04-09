import mongoose from "mongoose";

const tableproductnow = mongoose.Schema({

    luastoday: {
        type: String
    },
    luastodate: {
        type: String
    },
    tontoday: {
        type: String
    },
    tontodate: {
        type: String
    },
    tchtoday: {
        type: String
    },
    tchtodate: {
        type: String
    },
    gulatoday: {
        type: String
    },
    gulatodate: {
        type: String
    },
    tshtoday: {
        type: String
    },
    tshtodate: {
        type: String
    },
    tctstoday: {
        type: String
    },
    tctstodate: {
        type: String
    },
    balancetoday: {
        type: String
    },
    balancetodate: {
        type: String
    },

    rendementtoday: {
        type: String
    },
    rendementtodate: {
        type: String
    },
    rundaytoday: {
        type: String
    },
    rundaytodate: {
        type: String
    },
    rainfalltoday: {
        type: String
    },
    rainfalltodate: {
        type: String
    },
    plantfinaltoday: {
        type: String
    },
    plantfinaltodate: {
        type: String
    },
    factorytoday: {
        type: String
    },
    factorytodate: {
        type: String
    },
    yearsperiode: {
        type: String
    },

});


export default mongoose.model('tableproductnow', tableproductnow)