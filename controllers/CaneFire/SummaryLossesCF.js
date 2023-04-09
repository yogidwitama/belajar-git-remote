import summarycf from "../../models/CaneFire/SummaryLossesCaneFire.js";

export const getSumLossCF = async (req, res) => {
    try {
        const Card1 = await summarycf.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getSumLossCFById = async (req, res) => {
    try {
        const Card1 = await summarycf.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveSumLossCF = async (req, res) => {
    const Card1 = new summarycf(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateSumLossCF = async (req, res) => {
    try {
        const updatedcard1 = await summarycf.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteSumLossCF = async (req, res) => {
    try {
        const deletedcard1 = await summarycf.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}