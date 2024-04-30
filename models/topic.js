
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const unitSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },
    order:{
        type: Number,
        unique: Number,
        required: true
    },
    unitId:{
        type: Schema.Types.ObjectId,
        ref: 'unit',
        required: true
    }

})

module.exports = mongoose.model('topic' , unitSchema);