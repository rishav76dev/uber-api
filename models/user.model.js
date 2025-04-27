const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            trim: true
        },
        lastname:{
            type: String,
            
            trim: true
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    socketId:{
        type: String
    },
}, { timestamps: true });

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;