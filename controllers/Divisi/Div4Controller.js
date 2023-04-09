import carddiv4 from "../../models/Divisi/cardDiv4Model.js";

export const getCards = async (req, res) => {
    try {
        const Card4 = await carddiv4.find();
        res.json(Card4);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getCardById = async (req, res) => {
    try {
        const Card4 = await carddiv4.findById(req.params.id);
        res.json(Card4);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveCard = async (req, res) => {
    const Card4 = new carddiv4(req.body);
    try {
        const insertedcard = await Card4.save();
        res.status(204).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateCard = async (req, res) => {
    try {
        const updatedcard4 = await carddiv4.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard4);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteCard = async (req, res) => {
    try {
        const deletedcard4 = await carddiv4.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard4);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}