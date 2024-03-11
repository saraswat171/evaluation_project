const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema({
    name: {
        type: String,
      
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'Not available'
    },

    genre: {
        type: String,
      
        required: true
    },
    quantity: {
        type: Number,
 
        required: true
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('Books',BookSchema);

