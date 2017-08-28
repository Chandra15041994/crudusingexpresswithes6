import mongoose from 'mongoose';
let Schema = mongoose.Schema;
let dataSchema = new Schema({
    Name : String,
    EmpId : Number,
    Address : String
});
let data = mongoose.model('data', dataSchema )
export default data;