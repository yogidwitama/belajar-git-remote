import carddiv1 from "../../models/Divisi/cardDiv1Model.js";

export const getCards = async (req, res) => {
    try {
        const Card1 = await carddiv1.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getCardById = async (req, res) => {
    try {
        const Card1 = await carddiv1.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveCard = async (req, res) => {
    const Card1 = new carddiv1(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateCard = async (req, res) => {
    try {
        const updatedcard1 = await carddiv1.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteCard = async (req, res) => {
    try {
        const deletedcard1 = await carddiv1.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}