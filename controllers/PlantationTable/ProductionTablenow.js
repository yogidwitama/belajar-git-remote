// tableproductnowProductnow Productnow
import tableproductnow from "../../models/PlantationTable/ProductTablenow.js";

export const getProductnow = async (req, res) => {
    try {
        const Card1 = await tableproductnow.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getProductnowById = async (req, res) => {
    try {
        const Card1 = await tableproductnow.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const saveProductnow = async (req, res) => {
    const Card1 = new tableproductnow(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateProductnow = async (req, res) => {
    try {
        const updatedcard1 = await tableproductnow.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteProductnow = async (req, res) => {
    try {
        const deletedcard1 = await tableproductnow.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}