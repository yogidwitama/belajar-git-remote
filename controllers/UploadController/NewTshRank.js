import csv from "csvtojson"
import tshUploadNew from "../../models/UploadCSV/Management/TshRankNew.js";


export const uploadCsv = async(csvFilePath)=>{
    const jsonArray = await csv().fromFile(csvFilePath);

    for(let i = 0; i < jsonArray.length; i++){
        const data= jsonArray[i];
        const uploadData= new tshUploadNew({
            title:data.title,
            timeupload: data.timeupload,
            file:{
                name: data.name,
                no: data.no
            }
        })
    }
}
