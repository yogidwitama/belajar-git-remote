import chartdivisisatu from "../../models/ChartDivisi/Divisi1.js";

export const getChartdivsatu = async (req, res) => {
    try {
        const Card1 = await chartdivisisatu.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getChartdivsatuById = async (req, res) => {
    try {
        const Card1 = await chartdivisisatu.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveChartdivsatu = async (req, res) => {
    const Card1 = new chartdivisisatu(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateChartdivsatu = async (req, res) => {
    try {
        const updatedcard1 = await chartdivisisatu.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteChartdivsatu = async (req, res) => {
    try {
        const deletedcard1 = await chartdivisisatu.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}