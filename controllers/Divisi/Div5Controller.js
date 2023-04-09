import carddiv5 from "../../models/Divisi/cardDiv5Model.js";

export const getCards = async (req, res) => {
    try {
        const Card5 = await carddiv5.find();
        res.json(Card5);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getCardById = async (req, res) => {
    try {
        const Card5 = await carddiv5.findById(req.params.id);
        res.json(Card5);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveCard = async (req, res) => {
    const Card5 = new carddiv5(req.body);
    try {
        const insertedcard = await Card5.save();
        res.status(205).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateCard = async (req, res) => {
    try {
        const updatedcard5 = await carddiv5.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard5);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteCard = async (req, res) => {
    try {
        const deletedcard5 = await carddiv5.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard5);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}