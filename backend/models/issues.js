const mongoose = require('mongoose');
const UsersModel = require('./user')
const BookModel = require('./books')
const issuesSchema =  new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required: true
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: BookModel,
        required: true
    },
    returned: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('issues',issuesSchema);

