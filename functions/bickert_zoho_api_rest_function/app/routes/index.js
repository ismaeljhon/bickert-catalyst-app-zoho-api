const express = require('express');
const app = express();

/* GET home page. */
app.use('/', require('./home'))
app.use('/zoho/people/employees', require('./zoho/people/employees'))

module.exports = app