import cardharvestinggpm from "../../models/Harvesting/Cardharvesting.js";

export const getCardharvesting = async (req, res) => {
    try {
        const cards = await cardharvestinggpm.find().sort({ createdAt: 'desc' });
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getCardharvestingById = async (req, res) => {
    try {
        const card = await cardharvestinggpm.findById(req.params.id);
        res.json(card);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const saveCardharvesting = async (req, res) => {
    const card = new cardharvestinggpm(req.body);
    try {
        const insertedcard = await card.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateCardharvesting = async (req, res) => {
    try {
        const updatedcard = await cardharvestinggpm.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteCardharvesting = async (req, res) => {
    try {
        const deletedcard = await cardharvestinggpm.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

