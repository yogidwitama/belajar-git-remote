// chartdiv3tch
// chartdiv3tch
import chartdiv3tch from "../../models/ChartDivisiTch/Divisi3Tch.js";

export const getCharttch3 = async (req, res) => {
    try {
        const Card1 = await chartdiv3tch.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getCharttch3ById = async (req, res) => {
    try {
        const Card1 = await chartdiv3tch.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveCharttch3  = async (req, res) => {
    const Card1 = new chartdiv3tch(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateCharttch3  = async (req, res) => {
    try {
        const updatedcard1 = await chartdiv3tch.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteCharttch3  = async (req, res) => {
    try {
        const deletedcard1 = await chartdiv3tch.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}