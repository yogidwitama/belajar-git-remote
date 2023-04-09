import Chart from "../models/ChartModel.js";

export const getCharts = async (req, res) => {
    try {
        const chart = await Chart.find();
        res.json(chart);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getChartById = async (req, res) => {
    try {
        const chart = await Chart.findById(req.params.id);
        res.json(chart);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveChart = async (req, res) => {
    const chart = new Chart(req.body);
    try {
        const insertedChart = await chart.save();
        res.status(201).json(insertedChart);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateChart = async (req, res) => {
    try {
        const updatedchart = await Chart.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedchart);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteChart = async (req, res) => {
    try {
        const deletedchart = await Chart.deleteOne({_id:req.params.id});
        res.status(200).json(deletedchart);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}