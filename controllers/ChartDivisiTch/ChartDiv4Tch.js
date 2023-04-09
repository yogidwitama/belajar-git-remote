// chartdiv4tch
// chartdiv4tch
import chartdiv4tch from "../../models/ChartDivisiTch/Divisi4Tch.js";

export const getCharttch4 = async (req, res) => {
    try {
        const Card1 = await chartdiv4tch.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getCharttch4ById = async (req, res) => {
    try {
        const Card1 = await chartdiv4tch.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveCharttch4  = async (req, res) => {
    const Card1 = new chartdiv4tch(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateCharttch4  = async (req, res) => {
    try {
        const updatedcard1 = await chartdiv4tch.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteCharttch4  = async (req, res) => {
    try {
        const deletedcard1 = await chartdiv4tch.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}