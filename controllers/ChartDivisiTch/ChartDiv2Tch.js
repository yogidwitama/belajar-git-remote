// chartdiv2tch
// chartdiv2tch
import chartdiv2tch from "../../models/ChartDivisiTch/Divisi2Tch.js";

export const getCharttch2 = async (req, res) => {
    try {
        const Card1 = await chartdiv2tch.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getCharttch2ById = async (req, res) => {
    try {
        const Card1 = await chartdiv2tch.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveCharttch2  = async (req, res) => {
    const Card1 = new chartdiv2tch(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateCharttch2  = async (req, res) => {
    try {
        const updatedcard1 = await chartdiv2tch.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteCharttch2  = async (req, res) => {
    try {
        const deletedcard1 = await chartdiv2tch.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}