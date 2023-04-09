import mongoose from "mongoose";

const masterlist = mongoose.Schema({
    petak: {
        type: [String],
        required: true
    },
    block: {
        type: [String],
        required: true
    },
    division: {
        type: [String],
        required: true
    },
    area: {
        type: [Number],
        required: true
    },
    varietas: {
        type: [String],
        required: true
    },
    category: {
        type: [String],
        required: true
    },
    dateplant: {
        type: [Date],
        required: true
    },
    system: {
        type: [String],
        required: true
    },
    dateharvest: {
        type: [Date],
        required: true
    },
    varietyhist: {
        type: [String],
        required: true
    },
    categoryhist: {
        type: [String],
        required: true
    },
    tch: {
        type: [Number],
        required: true
    },
    gliflatest: {
        type: [Date],
        required: true
    },
    glifactual: {
        type: [Date],
        required: true
    },
    glifstatus: {
        type: [String],
        required: true
    },
    blotong: {
        type: [Date],
        required: true
    },
    brushing: {
        type: [Date],
        required: true
    },
    ploughlatest: {
        type: [Date],
        required: true
    },
    ploughactual: {
        type: [Date],
        required: true
    },
    ploughstatus: {
        type: [String],
        required: true
    },
    harrow: {
        type: [Date],
        required: true
    },
    trackmark: {
        type: [Date],
        required: true
    },
    ripping: {
        type: [Date],
        required: true
    },
    furrowbasalt: {
        type: [Date],
        required: true
    },
    plantlatest: {
        type: [Date],
        required: true
    },
    plantactual: {
        type: [Date],
        required: true
    },
    plantstatus: {
        type: [String],
        required: true
    },
    irr1: {
        type: [Date],
        required: true
    },
    irr2: {
        type: [Date],
        required: true
    },
    irr3: {
        type: [Date],
        required: true
    },
    compact: {
        type: [Date],
        required: true
    },
    prelatest: {
        type: [Date],
        required: true
    },
    preactual: {
        type: [Date],
        required: true
    },
    prestatus: {
        type: [String],
        required: true
    },
    sulam: {
        type: [Date],
        required: true
    },
    leaftyne: {
        type: [Date],
        required: true
    },
    fertilelatest: {
        type: [Date],
        required: true
    },
    fertileactual: {
        type: [Date],
        required: true
    },
    fertilestatus: {
        type: [String],
        required: true
    },
    post1: {
        type: [Date],
        required: true
    },
    post2: {
        type: [Date],
        required: true
    },
    post3: {
        type: [Date],
        required: true
    },
    weed: {
        type: [Date],
        required: true
    },
    observe: {
        type: [Date],
        required: true
    },
    germ: {
        type: [Number],
        required: true
    },
});

export default mongoose.model('masterlist', masterlist);