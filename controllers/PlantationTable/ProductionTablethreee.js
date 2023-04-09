// producthistProductThree 
import producthist from "../../models/PlantationTable/ProductionTableHist.js";

export const getProductThree = async (req, res) => {
    try {
        const Card1 = await producthist.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getProductThreeById = async (req, res) => {
    try {
        const Card1 = await producthist.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveProductThree  = async (req, res) => {
    const Card1 = new producthist(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateProductThree  = async (req, res) => {
    try {
        const updatedcard1 = await producthist.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteProductThree  = async (req, res) => {
    try {
        const deletedcard1 = await producthist.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}