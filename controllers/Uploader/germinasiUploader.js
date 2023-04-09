import germinasiUpload from "../../models/UploadCSV/Management/GerminasiUpload.js";
import csvtojson from "csvtojson"
import parse from "csv-parser";
import csv from "csv-parser"


export const UploaderCsv = async (req, res) => {
    try {
        const csv = new germinasiUpload({
            name: req.body.name,
            file: req.file.buffer
        });
        await csv.save();
        res.status(200).send("File Uploaded Successfully")
    } catch (error) {
        console.log(error);
        res.status(500).send("File Uploaded Failed")
    }
};

export const deleteCsv = async (req, res) => {
    try {
        const csv = await germinasiUpload.findByIdAndDelete(req.params.id)
        if (!csv) {
            return res.status(404).send("CSV not Found")
        }
        res.status(200).send("Csv Deleted")
    } catch (error) {
        console.log(error);
        res.status(500).send("Delete Failed")
    }
};

export const getAllCsv = async (req, res) => {
    try {
        const csvs = await germinasiUpload.find();
        const jsonData = csvs.map(csv => {
            const rows = csv.file.toString().split("\n");
            const headers = rows[0].split(',');
            const data = rows.slice(1).filter(row => row.trim() !== '').map(row => {
                const values = row.split(',');
                return headers.reduce((obj, header, index) => {
                    obj[header.trim()] = values[index] ? values[index].trim() : null;
                    return obj;
                }, {})
            })
            return {
                id: csv._id,
                name: csv.name,
                createdAt: csv.createdAt,
                data
            }
        });
        res.status(200).json(jsonData)
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed ")
    }
}


export const getCsvByYearMonth = async (req, res) => {
    try {
      const year = req.query.year;
      const month = req.query.month;
  
      const csvs = await CsvModel.find();
      const filteredCsvs = csvs.filter(csv => {
        const createdAt = new Date(csv.createdAt);
        return createdAt.getFullYear() == year && createdAt.getMonth() == month - 1;
      });
      const jsonData = filteredCsvs.map(csv => {
        const rows = csv.file.toString().split("\n");
        const headers = rows[0].split(',');
        const data = rows.slice(1).filter(row => row.trim() !== '').map(row => {
            const values = row.split(',');
            return headers.reduce((obj, header, index) => {
                obj[header.trim()] = values[index] ? values[index].trim() : null;
                return obj;
            }, {})
        })
        return {
            id: csv._id,
            name: csv.name,
            createdAt: csv.createdAt,
            data
        }
      });
  
      res.status(200).json(jsonData);
    } catch (error) {
      console.error(error);
      res.status(500).send("Failed")
    }
  }
  