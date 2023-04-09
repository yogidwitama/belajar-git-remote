import dtvsbhr from "../../models/Factory/ChartFactorydtvsbhr.js";

export const getDtvsBhr = async (req, res) => {
    try {
        const dtbhr = await dtvsbhr.find();
        res.json(dtbhr);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getDtvsBhrById = async (req, res) => {
    try {
        const dtbhr = await dtvsbhr.findById(req.params.id);
        res.json(dtbhr);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveDtvsBhr= async (req, res) => {
    const dtbhr = new dtvsbhr(req.body);
    try {
        const inserteddtbhr = await dtbhr.save();
        res.status(201).json(inserteddtbhr);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateDtvsBhr= async (req, res) => {
    try {
        const updateddtbhr = await dtvsbhr.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateddtbhr);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteDtvsBhr= async (req, res) => {
    try {
        const deleteddtbhr = await dtvsbhr.deleteOne({_id:req.params.id});
        res.status(200).json(deleteddtbhr);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}