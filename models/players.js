const mongoose = require('mongoose')

// const playerScehma = new mongoose.Schema( {
//     name : {
//         type : 'string',
//         required : true,
//         minlength : 2,
//     },
//     country : { 
//         type : 'string',
//         required : true,
//         minlength : 3
//     },

//     sport: {
//         type : 'string',
//         required : true,
//         minlength : 5,
//     },

//     medal : {
//         type : 'string',
//         required : true,
//         minlength : 4,
//     },

//     year :{
//         type : 'Number',
//         required : true,
//         maxlength : 4
//     }   
// })
const playerScehma = new mongoose.Schema({
    name: {
        type: String, // Correct
        required: true,
        minlength: 2,
    },
    country: { 
        type: String, // Correct
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
        type: Number, // Correct
        required: true,
        maxlength: 4, // Note: This should probably be `max` instead of `maxlength`
    }
});


const Players = new mongoose.model('Players' , playerScehma);

module.exports = Players;