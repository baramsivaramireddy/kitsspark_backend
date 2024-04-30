const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const subjectSchema = new Schema({

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
    image: {
        type: String
    },
    assingedToType: {
        type: String ,
        enum: ['teacher' ,'expert']
    },
    assingedTo: {
        type: Schema.Types.ObjectId
    },
    isSOC : {
        type: Boolean,
        required: true
    },
    isLAB: {
        type : Boolean,
        requried: true
    },
    year:{
        type : String,
        enum: ['1' ,'2' , '3','4' , 'common'] 
    }

})

module.exports = mongoose.model('subject' , subjectSchema);