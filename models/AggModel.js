import mongoose from "mongoose";

const lhk = mongoose.Schema({
    petak: {
        type: [String],
        required: true
    },
    activity: {
        type: [String],
        required: true
    },
    concatenate: {
        type: [String],
        required: true
    },
    category: {
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
    result: {
        type: [Number],
        required: true
    },
    balance: {
        type: [Number],
        required: true
    },
    status: {
        type: [String],
        required: true
    },
    tanggalaktual: {
        type: [Date],
        required: true
    },
    varietas: {
        type: [String],
        required: true
    },
    nounit: {
        type: [String],
        required: true
    },
    ops1: {
        type: [String],
        required: true
    },
    ops2: {
        type: [String],
        required: true
    },
    ops3: {
        type: [String],
        required: true
    },
    mandors1: {
        type: [String],
        required: true
    },
    mandors2: {
        type: [String],
        required: true
    },
    mandors3: {
        type: [String],
        required: true
    },
    kontraktor: {
        type: [String],
        required: true
    },
    totalbibit: {
        type: [Number],
        required: true
    },
    lnd: {
        type: [Number],
        required: true
    },
    ecc: {
        type: [Number],
        required: true
    },
    tenaga: {
        type: [Number],
        required: true
    },
});

export default mongoose.model('lhk', lhk);