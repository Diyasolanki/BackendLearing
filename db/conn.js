const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/olympicdata')
.then(() => {
    console.log('db connection established');
})
.catch((e) => {
    console.log(e);
})