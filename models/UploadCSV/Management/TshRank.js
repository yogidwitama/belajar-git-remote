import mongoose from "mongoose";

const Schema = mongoose.Schema;


const tshUpload = mongoose.Schema({
   position:{
    type:String
   },
   estate:{
    type:String
   },
   division:{
    type: String
   },
   ha:{
    type: String
   },
   tch:{
    type:String
   },
   tsh:{
    type:String
   },
   rendement:{
    type:String
   },
   week:{
    type: String
   }
}, {timestamps: true});

export default mongoose.model('tshUpload', tshUpload)