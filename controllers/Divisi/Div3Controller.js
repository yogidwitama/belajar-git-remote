import carddiv3 from "../../models/Divisi/cardDiv3Model.js";

export const getCards = async (req, res) => {
    try {
        const Card3 = await carddiv3.find();
        res.json(Card3);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getCardById = async (req, res) => {
    try {
        const Card3 = await carddiv3.findById(req.params.id);
        res.json(Card3);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveCard = async (req, res) => {
    const Card3 = new carddiv3(req.body);
    try {
        const insertedcard = await Card3.save();
        res.status(203).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateCard = async (req, res) => {
    try {
        const updatedcard3 = await carddiv3.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard3);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteCard = async (req, res) => {
    try {
        const deletedcard3 = await carddiv3.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard3);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}