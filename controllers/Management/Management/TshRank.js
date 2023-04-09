import tshrank from "../../../models/Management/Management/TshRank.js";

export const getTshRank = async (req, res) => {
    try {
        const users = await tshrank.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getTshRankById = async (req, res) => {
    try {
        const user = await tshrank.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveTshRank = async (req, res) => {
    const user = new tshrank(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateTshRank = async (req, res) => {
    try {
        const updateduser = await tshrank.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteTshRank = async (req, res) => {
    try {
        const deleteduser = await tshrank.deleteOne({_id:req.params.id});
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}