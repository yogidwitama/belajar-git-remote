import mongoose from "mongoose";

const areaharvestinggpm = mongoose.Schema({
    januarybc: {
        type: String,
    },
    januarycc: {
        type: String,
    },
    januarylc: {
        type: String,
    },
   
    februaribc: {
        type: String,
    },
    februaricc: {
        type: String,
    },
    februarilc: {
        type: String,
    },
    maretbc: {
        type: String,
    },
    maretcc: {
        type: String,
    },
    maretlc: {
        type: String,
    },


    aprilbc: {
        type: String,
    },
    aprilcc: {
        type: String,
    },
    aprillc: {
        type: String,
    },

    meibc: {
        type: String,
    },
    meicc: {
        type: String,
    },
    meilc: {
        type: String,
    },
   
    junibc: {
        type: String,
    },
    junicc: {
        type: String,
    },
    junilc: {
        type: String,
    },
   
    julibc: {
        type: String,
    },
    julicc: {
        type: String,
    },
    julilc: {
        type: String,
    },

    agustusbc: {
        type: String,
    },
    agustuscc: {
        type: String,
    },
    agustuslc: {
        type: String,
    },

    septemberbc: {
        type: String,
    },
    septembercc: {
        type: String,
    },
    septemberlc: {
        type: String,
    },
   
    oktoberbc: {
        type: String,
    },
    oktobercc: {
        type: String,
    },
    oktoberlc: {
        type: String,
    },
   
    novemberbc: {
        type: String,
    },
    novembercc: {
        type: String,
    },
    novemberlc: {
        type: String,
    },  
   
    desemberbc: {
        type: String,
    },
    desembercc: {
        type: String,
    },
    desemberlc: {
        type: String,
    },

    januarybcnext: {
        type: String,
    },
    januaryccnext: {
        type: String,
    },
    januarylcnext: {
        type: String,
    },
   
    februaribcnext: {
        type: String,
    },
    februariccnext: {
        type: String,
    },
    februarilcnext: {
        type: String,
    },
    maretbcnext: {
        type: String,
    },
    maretccnext: {
        type: String,
    },
    maretlcnext: {
        type: String,
    },


    aprilbcnext: {
        type: String,
    },
    aprilccnext: {
        type: String,
    },
    aprillcnext: {
        type: String,
    },

    meibcnext: {
        type: String,
    },
    meiccnext: {
        type: String,
    },
    meilcnext: {
        type: String,
    },
   
    junibcnext: {
        type: String,
    },
    juniccnext: {
        type: String,
    },
    junilcnext: {
        type: String,
    },
   
    julibcnext: {
        type: String,
    },
    juliccnext: {
        type: String,
    },
    julilcnext: {
        type: String,
    },

    agustusbcnext: {
        type: String,
    },
    agustusccnext: {
        type: String,
    },
    agustuslcnext: {
        type: String,
    },

    septemberbcnext: {
        type: String,
    },
    septemberccnext: {
        type: String,
    },
    septemberlcnext: {
        type: String,
    },
   
    oktoberbcnext: {
        type: String,
    },
    oktoberccnext: {
        type: String,
    },
    oktoberlcnext: {
        type: String,
    },
   
    novemberbcnext: {
        type: String,
    },
    novemberccnext: {
        type: String,
    },
    novemberlcnext: {
        type: String,
    },  
   
    desemberbcnext: {
        type: String,
    },
    desemberccnext: {
        type: String,
    },
    desemberlcnext: {
        type: String,
    },
   
   
},
    {
        timestamps: true // opsi timestamps
    });

export default mongoose.model('areaharvestinggpm',areaharvestinggpm);