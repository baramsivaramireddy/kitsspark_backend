
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
    subjectId:{
        type: Schema.Types.ObjectId,
        ref: 'subject',
        required: true
    }

})

module.exports = mongoose.model('unit' , unitSchema);