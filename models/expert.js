const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const expertSchema = new Schema({

    email: {
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model('expert' , expertSchema);