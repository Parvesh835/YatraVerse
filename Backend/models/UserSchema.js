const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 40
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Tourist', 'Agent', 'admin'],
        default: 'Tourist'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserModel = new model('Users', UserSchema);

module.exports = UserModel