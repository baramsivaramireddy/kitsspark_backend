const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const StudentSchema = new Schema({

    email: {
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model('students' , StudentSchema);