import Card from "../../../models/Management/Management/CardModel.js";

export const getCards = async (req, res) => {
    try {
        const cards = await Card.find().sort({ createdAt: 'desc' });
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getCardById = async (req, res) => {
    try {
        const card = await Card.findById(req.params.id);
        res.json(card);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const saveCard = async (req, res) => {
    const card = new Card(req.body);
    try {
        const insertedcard = await card.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateCard = async (req, res) => {
    try {
        const updatedcard = await Card.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteCard = async (req, res) => {
    try {
        const deletedcard = await Card.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const searchCard = async (req, res) => {
    try {
        const { searchTerm } = req.body;
        const searchResults = await Card.find({
            $or: [
                { runday: { $regex: searchTerm, $options: "i" } },
                { millday: { $regex: searchTerm, $options: "i" } },
                { tchtodate: { $regex: searchTerm, $options: "i" } },
                { tshtodate: { $regex: searchTerm, $options: "i" } },
                { tshlw: { $regex: searchTerm, $options: "i" } },
                { tshly: { $regex: searchTerm, $options: "i" } },
                { sugartodate: { $regex: searchTerm, $options: "i" } },
                { sugarlw: { $regex: searchTerm, $options: "i" } },
                { sugarly: { $regex: searchTerm, $options: "i" } },
                { tshprojection: { $regex: searchTerm, $options: "i" } },
                { tshprojectionly: { $regex: searchTerm, $options: "i" } },
                { sugarprojection: { $regex: searchTerm, $options: "i" } },
                { sugarprojectionly: { $regex: searchTerm, $options: "i" } },
                { rendementtodate: { $regex: searchTerm, $options: "i" } },
                { rendemently: { $regex: searchTerm, $options: "i" } }
            ]
        });
        if (!searchResults || searchResults.length === 0) {
            const cards = await Card.find();
            return res.json(cards);
        }
        res.json(searchResults);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};