const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const teacherSchema = new Schema({

    email: {
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model('teacher' , teacherSchema);