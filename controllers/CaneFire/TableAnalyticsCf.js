import tableanalyticscf from "../../models/CaneFire/TableAnalytics.js";

export const getAnalyticCf = async (req, res) => {
    try {
        const Card1 = await tableanalyticscf.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getAnalyticCfById = async (req, res) => {
    try {
        const Card1 = await tableanalyticscf.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveAnalyticCf = async (req, res) => {
    const Card1 = new tableanalyticscf(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateAnalyticCf = async (req, res) => {
    try {
        const updatedcard1 = await tableanalyticscf.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteAnalyticCf = async (req, res) => {
    try {
        const deletedcard1 = await tableanalyticscf.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}