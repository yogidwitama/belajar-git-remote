import weekUpdate from "../../models/weekUpdate/weekUpdate.js";

export const getWeek = async (req, res) => {
    try {
        const Week = await weekUpdate.find()
        res.json(Week)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export const AddWeeks = async (req, res) => {
    const Weeks = new weekUpdate(req.body);
    try {
        const insertedWeek = await Weeks.save();
        res.status(201).json(insertedWeek)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updatedWeak = async (req, res) => {
    try {
        const updatesWeeks = await weekUpdate.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatesWeeks)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}