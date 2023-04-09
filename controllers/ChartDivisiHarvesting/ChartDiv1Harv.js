// chartdiv1harvesting
import chartdiv1harvesting from "../../models/ChartDivisiHarv/Divisi1harvesting.js";

export const getChartharv1 = async (req, res) => {
    try {
        const Card1 = await chartdiv1harvesting.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getChartharv1ById = async (req, res) => {
    try {
        const Card1 = await chartdiv1harvesting.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveChartharv1  = async (req, res) => {
    const Card1 = new chartdiv1harvesting(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateChartharv1  = async (req, res) => {
    try {
        const updatedcard1 = await chartdiv1harvesting.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteChartharv1  = async (req, res) => {
    try {
        const deletedcard1 = await chartdiv1harvesting.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}