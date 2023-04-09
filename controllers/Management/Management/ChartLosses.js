// chartlosses
import chartlosses from "../../../models/Management/Management/ChartLosses.js";

export const getChartLosses = async (req, res) => {
    try {
        const Card1 = await chartlosses.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getChartLossesById = async (req, res) => {
    try {
        const Card1 = await chartlosses.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveChartLosses  = async (req, res) => {
    const Card1 = new chartlosses(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateChartLosses  = async (req, res) => {
    try {
        const updatedcard1 = await chartlosses.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteChartLosses  = async (req, res) => {
    try {
        const deletedcard1 = await chartlosses.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}