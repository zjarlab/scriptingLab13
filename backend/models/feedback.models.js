const mongoose = require('mongoose');
const FeedbackScheme = mongoose.Schema({
    pname : {
        type : String,
        required : true
    },
    feedback:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('Feedback',FeedbackScheme);