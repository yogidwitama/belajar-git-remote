import mongoose from "mongoose";

const dtvsbhr = mongoose.Schema({
    days: {
        type: String,
    },
    bhrdowntime: {
        type: String,
    },
    bhrtoday: {
        type: String,
    },
    bhrh5downtime: {
        type: String,
    },

    bhrstandart: {
        type: String,
    },
    weekupdate:{
        type:String
    }

},
    {
        timestamps: true // opsi timestamps
    });

export default mongoose.model('dtvsbhr', dtvsbhr);