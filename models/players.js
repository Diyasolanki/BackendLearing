const mongoose = require('mongoose')

const playerScehma = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    country: { 
        type: String, 
        required: true,
        minlength: 3,
    },
    sport: {
        type: String,
        required: true,
        minlength: 5,
    },
    medal: {
        type: String,
        required: true,
        minlength: 4,
    },
    year: {
        type: Number, 
        required: true,
        maxlength: 4,     
    }
});


const Players = new mongoose.model('Players' , playerScehma);

module.exports = Players;
