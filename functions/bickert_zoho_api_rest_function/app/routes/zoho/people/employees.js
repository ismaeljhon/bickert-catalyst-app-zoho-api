const express = require('express');
const router = express.Router();

const ZohoPeopleEmployeeController = require('@controllers/zoho/people/employee.controller')
const errorHandler = require('@src/shared/ErrorHandler')

router.get('/', async (req, res, next) => {
    let results = await new ZohoPeopleEmployeeController(req).getAll()

    if (results && results.errors) {
        return errorHandler.send(res, results)
    }

    res.send({
        employees: results
    })
});

module.exports = router