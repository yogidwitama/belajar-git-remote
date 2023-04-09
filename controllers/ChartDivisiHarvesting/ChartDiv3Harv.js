// chartdiv3harvesting
import chartdiv3harvesting from "../../models/ChartDivisiHarv/Divisi3harvesting.js";

export const getChartharv3 = async (req, res) => {
    try {
        const Card1 = await chartdiv3harvesting.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getChartharv3ById = async (req, res) => {
    try {
        const Card1 = await chartdiv3harvesting.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveChartharv3  = async (req, res) => {
    const Card1 = new chartdiv3harvesting(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateChartharv3  = async (req, res) => {
    try {
        const updatedcard1 = await chartdiv3harvesting.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteChartharv3  = async (req, res) => {
    try {
        const deletedcard1 = await chartdiv3harvesting.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}