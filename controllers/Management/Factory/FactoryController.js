import Cardfactory from "../../../models/Management/Factory/CardModel.js";

export const getCards = async (req, res) => {
    try {
        const cards = await Cardfactory.find().sort({ createdAt: 'desc' });
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getCardById = async (req, res) => {
    try {
        const card = await Cardfactory.findById(req.params.id);
        res.json(card);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const saveCard = async (req, res) => {
    const card = new Cardfactory(req.body);
    try {
        const insertedcard = await card.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateCard = async (req, res) => {
    try {
        const updatedcard = await Cardfactory.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteCard = async (req, res) => {
    try {
        const deletedcard = await Cardfactory.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const searchCard = async (req, res) => {
    try {
        const { searchTerm } = req.body;
        const searchResults = await Cardfactory.find({
            $or: [
                { runday: { $regex: searchTerm, $options: "i" } }
            ]
        });
        if (!searchResults || searchResults.length === 0) {
            const cards = await Cardfactory.find();
            return res.json(cards);
        }
        res.json(searchResults);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};