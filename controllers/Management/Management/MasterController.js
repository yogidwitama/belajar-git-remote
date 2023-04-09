import masterlist from "../../../models/Management/Management/MasterModel.js";

export const getAll = async (req, res) => {
    try {
        const master = await masterlist.find();
        res.json(master);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getById = async (req, res) => {
    try {
        const master = await masterlist.findById(req.params.id);
        res.json(master);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const save = async (req, res) => {
    const masterlist = new Card(req.body);
    try {
        const insertmaster = await masterlist.save();
        res.status(201).json(insertmaster);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const update = async (req, res) => {
    try {
        const updatemaster = await masterlist.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatemaster);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleted = async (req, res) => {
    try {
        const deletemaster = await masterlist.deleteOne({ _id: req.params.id });
        res.status(200).json(deletemaster);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const search = async (req, res) => {
    try {
        const { searchTerm } = req.body;
        const searchResults = await masterlist.find({
            $or: [
                { petak: { $regex: searchTerm, $options: "i" } }
            ]
        });
        if (!searchResults || searchResults.length === 0) {
            const cards = await masterlist.find();
            return res.json(cards);
        }
        res.json(searchResults);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};



