const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const departmentSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },
    shortcutCode: {
        type: String,
        unique: true,
        required: true
    },

})

module.exports = mongoose.model('department' , departmentSchema);