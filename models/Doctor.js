const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: false
        },
        doctorID:{
            type: String,
            required: true
        },
        specialisation:{
            type: String,
            required: true
        },
        docAddress:{
            type: String,
            required: false
        },
        create_at:{
            type: Date,
            required: true,
            default : Date.now
        }

})
const Post = module.exports =mongoose.model('Doctor', PostSchema);
