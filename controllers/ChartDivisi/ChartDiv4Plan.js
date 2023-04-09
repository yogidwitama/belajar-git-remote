import chartdiv4plan from "../../models/ChartDivisi/Divisi4planting.js";

export const getChartplan4 = async (req, res) => {
    try {
        const Card1 = await chartdiv4plan.find();
        res.json(Card1);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getChartplan4ById = async (req, res) => {
    try {
        const Card1 = await chartdiv4plan.findById(req.params.id);
        res.json(Card1);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveChartplan4  = async (req, res) => {
    const Card1 = new chartdiv4plan(req.body);
    try {
        const insertedcard = await Card1.save();
        res.status(201).json(insertedcard);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateChartplan4  = async (req, res) => {
    try {
        const updatedcard1 = await chartdiv4plan.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteChartplan4  = async (req, res) => {
    try {
        const deletedcard1 = await chartdiv4plan.deleteOne({_id:req.params.id});
        res.status(200).json(deletedcard1);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}