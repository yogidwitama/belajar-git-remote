import chartdiv2plan from "../../models/ChartDivisi/Divisi2planting.js";

export const getChartplan2 = async (req, res) => {
    try {
        const Card1 = await chartdiv2plan.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getChartplan2ById = async (req, res) => {
    try {
        const Card1 = await chartdiv2plan.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveChartplan2  = async (req, res) => {
    const Card1 = new chartdiv2plan(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateChartplan2  = async (req, res) => {
    try {
        const updatedcard1 = await chartdiv2plan.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteChartplan2  = async (req, res) => {
    try {
        const deletedcard1 = await chartdiv2plan.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}