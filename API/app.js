const express = require('express');
const bodyparser = require('body-parser');
const router = require('./Routes/UserRoutes')
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyparser.json());


app.use('/api', router);
module.exports = app;