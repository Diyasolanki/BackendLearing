const express = require('express');
const app = express();

const port = process.env.PORT || 8000;
require('../db/conn')


app.use(express.json());

const router = require('../routers/player');
app.use(router);




app.listen(port , () => console.log('connection establised'))