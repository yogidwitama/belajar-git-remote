// chartdiv3planChartplan3 
import chartdiv3plan from "../../models/ChartDivisi/Divisi3planting.js";

export const getChartplan3 = async (req, res) => {
    try {
        const Card1 = await chartdiv3plan.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getChartplan3ById = async (req, res) => {
    try {
        const Card1 = await chartdiv3plan.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveChartplan3  = async (req, res) => {
    const Card1 = new chartdiv3plan(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateChartplan3  = async (req, res) => {
    try {
        const updatedcard1 = await chartdiv3plan.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteChartplan3  = async (req, res) => {
    try {
        const deletedcard1 = await chartdiv3plan.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}