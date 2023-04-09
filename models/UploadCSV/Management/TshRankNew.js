import mongoose from "mongoose";


const tshUploadNew = mongoose.Schema({
  title: { type: String },
  File: {
    no: { type: String },
    name: { type: String },
  },
});
 
 export default mongoose.model('tshUploadNew', tshUploadNew)