// chartdiv5tch
// chartdiv5tch
import chartdiv5tch from "../../models/ChartDivisiTch/Divisi5Tch.js";

export const getCharttch5 = async (req, res) => {
    try {
        const Card1 = await chartdiv5tch.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getCharttch5ById = async (req, res) => {
    try {
        const Card1 = await chartdiv5tch.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveCharttch5  = async (req, res) => {
    const Card1 = new chartdiv5tch(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateCharttch5  = async (req, res) => {
    try {
        const updatedcard1 = await chartdiv5tch.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteCharttch5  = async (req, res) => {
    try {
        const deletedcard1 = await chartdiv5tch.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}