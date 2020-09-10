const express = require('express');
const app = express();

/* GET home page. */
app.use('/', require('./home'))
app.use('/zoho/people', require('./zoho/people'))

module.exports = app