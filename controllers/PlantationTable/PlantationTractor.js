// plantingtractorPlantingTractor 
import plantingtractor from "../../models/PlantationTable/PlantingTractorTable.js";

export const getPlantingTractor = async (req, res) => {
    try {
        const Card1 = await plantingtractor.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getPlantingTractorById = async (req, res) => {
    try {
        const Card1 = await plantingtractor.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const savePlantingTractor = async (req, res) => {
    const Card1 = new plantingtractor(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updatePlantingTractor = async (req, res) => {
    try {
        const updatedcard1 = await plantingtractor.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deletePlantingTractor = async (req, res) => {
    try {
        const deletedcard1 = await plantingtractor.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}