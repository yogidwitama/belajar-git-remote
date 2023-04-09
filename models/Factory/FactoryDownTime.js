import mongoose from "mongoose";

const factorydowntime = mongoose.Schema({
    januaryfactory: {
        type: String,
    },
    januarynocane: {
        type: String,
    },
    januarymaintenance: {
        type: String,
    },
    januarydayoff: {
        type: String,
    },

    februarifactory: {
        type: String,
    },
    februarinocane: {
        type: String,
    },
    februarimaintenance: {
        type: String,
    },
    februaridayoff: {
        type: String,
    },

    maretfactory: {
        type: String,
    },
    maretnocane: {
        type: String,
    },
    maretmaintenance: {
        type: String,
    },
    maretdayoff: {
        type: String,
    },


    aprilfactory: {
        type: String,
    },
    aprilnocane: {
        type: String,
    },
    aprilmaintenance: {
        type: String,
    },
    aprildayoff: {
        type: String,
    },

    meifactory: {
        type: String,
    },
    meinocane: {
        type: String,
    },
    meimaintenance: {
        type: String,
    },
    meidayoff: {
        type: String,
    },

    junifactory: {
        type: String,
    },
    juninocane: {
        type: String,
    },
    junimaintenance: {
        type: String,
    },
    junidayoff: {
        type: String,
    },

    julifactory: {
        type: String,
    },
    julinocane: {
        type: String,
    },
    julimaintenance: {
        type: String,
    },
    julidayoff: {
        type: String,
    },

    agustusfactory: {
        type: String,
    },
    agustusnocane: {
        type: String,
    },
    agustusmaintenance: {
        type: String,
    },
    agustusdayoff: {
        type: String,
    },

    septemberfactory: {
        type: String,
    },
    septembernocane: {
        type: String,
    },
    septembermaintenance: {
        type: String,
    },
    septemberdayoff: {
        type: String,
    },

    oktoberfactory: {
        type: String,
    },
    oktobernocane: {
        type: String,
    },
    oktobermaintenance: {
        type: String,
    },
    oktoberdayoff: {
        type: String,
    },

    novemberfactory: {
        type: String,
    },
    novembernocane: {
        type: String,
    },
    novembermaintenance: {
        type: String,
    },
    novemberdayoff: {
        type: String,
    },

    desemberfactory: {
        type: String,
    },
    desembernocane: {
        type: String,
    },
    desembermaintenance: {
        type: String,
    },
    desemberdayoff: {
        type: String,
    },


    januaryfactorynext: {
        type: String,
    },
    januarynocanenext: {
        type: String,
    },
    januarymaintenancenext: {
        type: String,
    },
    januarydayoffnext: {
        type: String,
    },

    februarifactorynext: {
        type: String,
    },
    februarinocanenext: {
        type: String,
    },
    februarimaintenancenext: {
        type: String,
    },
    februaridayoffnext: {
        type: String,
    },

    maretfactorynext: {
        type: String,
    },
    maretnocanenext: {
        type: String,
    },
    maretmaintenancenext: {
        type: String,
    },
    maretdayoffnext: {
        type: String,
    },


    aprilfactorynext: {
        type: String,
    },
    aprilnocanenext: {
        type: String,
    },
    aprilmaintenancenext: {
        type: String,
    },
    aprildayoffnext: {
        type: String,
    },

    meifactorynext: {
        type: String,
    },
    meinocanenext: {
        type: String,
    },
    meimaintenancenext: {
        type: String,
    },
    meidayoffnext: {
        type: String,
    },

    junifactorynext: {
        type: String,
    },
    juninocanenext: {
        type: String,
    },
    junimaintenancenext: {
        type: String,
    },
    junidayoffnext: {
        type: String,
    },

    julifactorynext: {
        type: String,
    },
    julinocanenext: {
        type: String,
    },
    julimaintenancenext: {
        type: String,
    },
    julidayoffnext: {
        type: String,
    },

    agustusfactorynext: {
        type: String,
    },
    agustusnocanenext: {
        type: String,
    },
    agustusmaintenancenext: {
        type: String,
    },
    agustusdayoffnext: {
        type: String,
    },

    septemberfactorynext: {
        type: String,
    },
    septembernocanenext: {
        type: String,
    },
    septembermaintenancenext: {
        type: String,
    },
    septemberdayoffnext: {
        type: String,
    },

    oktoberfactorynext: {
        type: String,
    },
    oktobernocanenext: {
        type: String,
    },
    oktobermaintenancenext: {
        type: String,
    },
    oktoberdayoffnext: {
        type: String,
    },

    novemberfactorynext: {
        type: String,
    },
    novembernocanenext: {
        type: String,
    },
    novembermaintenancenext: {
        type: String,
    },
    novemberdayoffnext: {
        type: String,
    },

    desemberfactorynext: {
        type: String,
    },
    desembernocanenext: {
        type: String,
    },
    desembermaintenancenext: {
        type: String,
    },
    desemberdayoffnext: {
        type: String,
    },



},
    {
        timestamps: true // opsi timestamps
    });

export default mongoose.model('factorydowntime', factorydowntime);