const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const regulationSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true
    }

})

module.exports = mongoose.model('regulation' , regulationSchema);