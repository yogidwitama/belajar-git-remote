import csvtojson from "csvtojson";
import tshUpload from "../../models/UploadCSV/Management/TshRank.js"




export const TshUpload = async (req, res, next) => {
    try {
        const filePath = req.file.path;
        const jsonObj = await csvtojson().fromFile(filePath);
        console.log(jsonObj);
        const result = await tshUpload.collection.insertMany(jsonObj);
        console.log(`${result.insertedCount} document inserted to collection`);
        res.send('File uploaded Success')
    } catch (error) {
        console.log(err);
        res.status(500).send('Upload Fail')
    }
}