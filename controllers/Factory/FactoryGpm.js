import factorydowntime from "../../models/Factory/FactoryDownTime.js";

export const getFactorydowntime = async (req, res) => {
    try {
        const cards = await factorydowntime.find().sort({ createdAt: 'desc' });
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getFactorydowntimeById = async (req, res) => {
    try {
        const card = await factorydowntime.findById(req.params.id);
        res.json(card);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const saveFactorydowntime  = async (req, res) => {
    const card = new factorydowntime(req.body);
    try {
        const insertedcard = await card.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateFactorydowntime  = async (req, res) => {
    try {
        const updatedcard = await factorydowntime.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteFactorydowntime  = async (req, res) => {
    try {
        const deletedcard = await factorydowntime.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

