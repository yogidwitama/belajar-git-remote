import lhk from "../models/AggModel.js";

export const getAll = async (req, res) => {
    try {
        const Agg = await lhk.find();
        res.json(Agg);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getSum = async (req, res) => {
    try {
        const Agg = await lhk.aggregate([
            {
                $group: {
                    _id: "$Division",
                    totalPetak: {$sum: "$Result"}
                },
            },
            {
                $sort: { _id: 1 }
            }
        ]);
        res.json(Agg);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



