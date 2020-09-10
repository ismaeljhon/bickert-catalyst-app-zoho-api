const Controller = require('@core/Controller')

class ZohoPeopleEmployeeController extends Controller {
    constructor(req) {
        super(req)
        this.model = 'zoho/people/employee'
    }
}

module.exports = ZohoPeopleEmployeeController