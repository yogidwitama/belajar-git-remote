import areaharvestinggpm from "../../models/Harvesting/AreaHarvesting.js";

export const getAreaharvesting = async (req, res) => {
    try {
        const cards = await areaharvestinggpm.find().sort({ createdAt: 'desc' });
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAreaharvestingById = async (req, res) => {
    try {
        const card = await areaharvestinggpm.findById(req.params.id);
        res.json(card);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const saveAreaharvesting = async (req, res) => {
    const card = new areaharvestinggpm(req.body);
    try {
        const insertedcard = await card.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateAreaharvesting = async (req, res) => {
    try {
        const updatedcard = await areaharvestinggpm.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteAreaharvesting = async (req, res) => {
    try {
        const deletedcard = await areaharvestinggpm.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

