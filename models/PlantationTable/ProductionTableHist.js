import mongoose from "mongoose";

const producthist = mongoose.Schema({

    luastwoyears: {
        type: String
    },
    tontwoyears: {
        type: String
    },
    tchtwoyears: {
        type: String
    },
    gulatwoyears: {
        type: String
    },
    tshtwoyears: {
        type: String
    },
    tctstwoyears: {
        type: String
    },
    rendtwoyears: {
        type: String
    },

    luasoneyears: {
        type: String
    },
    tononeyears: {
        type: String
    },
    tchoneyears: {
        type: String
    },
    gulaoneyears: {
        type: String
    },
    tshoneyears: {
        type: String
    },
    tctsoneyears: {
        type: String
    },
    rendsoneyears: {
        type: String
    },
    luasnow: {
        type: String
    },
    tonnow: {
        type: String
    },
    tchnow: {
        type: String
    },
    gulanow: {
        type: String
    },
    tshnow: {
        type: String
    },
    tctsnow: {
        type: String
    },
    rendnow: {
        type: String
    },
    yearstwo: {
        type: String
    },
    yearsone: {
        type: String
    },
    yearsnow: {
        type: String
    },
    yearsperiode: {
        type: String
    },

});


export default mongoose.model('producthist', producthist)