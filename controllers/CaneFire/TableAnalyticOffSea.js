import analyticoffseason from "../../models/CaneFire/AnalyticsOffsea.js";

export const getAnalyticoffSeas = async (req, res) => {
    try {
        const Card1 = await analyticoffseason.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getAnalyticoffSeasById = async (req, res) => {
    try {
        const Card1 = await analyticoffseason.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveAnalyticoffSeas = async (req, res) => {
    const Card1 = new analyticoffseason(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateAnalyticoffSeas = async (req, res) => {
    try {
        const updatedcard1 = await analyticoffseason.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteAnalyticoffSeas = async (req, res) => {
    try {
        const deletedcard1 = await analyticoffseason.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}