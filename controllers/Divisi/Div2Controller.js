import carddiv2 from "../../models/Divisi/cardDiv2Model.js";

export const getCards = async (req, res) => {
    try {
        const Card2 = await carddiv2.find();
        res.json(Card2);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getCardById = async (req, res) => {
    try {
        const Card2 = await carddiv2.findById(req.params.id);
        res.json(Card2);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveCard = async (req, res) => {
    const Card2 = new carddiv2(req.body);
    try {
        const insertedcard = await Card2.save();
        res.status(202).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateCard = async (req, res) => {
    try {
        const updatedcard2 = await carddiv2.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard2);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteCard = async (req, res) => {
    try {
        const deletedcard2 = await carddiv2.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard2);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}