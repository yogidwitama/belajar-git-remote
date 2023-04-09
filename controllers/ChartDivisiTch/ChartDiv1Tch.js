// chartdiv1tch
import chartdiv1tch from "../../models/ChartDivisiTch/Divisi1Tch.js";

export const getCharttch1 = async (req, res) => {
    try {
        const Card1 = await chartdiv1tch.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getCharttch1ById = async (req, res) => {
    try {
        const Card1 = await chartdiv1tch.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveCharttch1  = async (req, res) => {
    const Card1 = new chartdiv1tch(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateCharttch1  = async (req, res) => {
    try {
        const updatedcard1 = await chartdiv1tch.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteCharttch1  = async (req, res) => {
    try {
        const deletedcard1 = await chartdiv1tch.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}