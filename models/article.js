
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const articleSchema = new Schema({

    TargetType: {
        type: String,
        required: true
        // EVENT , TOPIC
    },
    TargetId:{
        type: Schema.Types.ObjectId,
        required: true
    },
    data:{
        type: String
    }

})

module.exports = mongoose.model('article' , articleSchema);