const Form = require('@models/zoho/people/Form')

class Employee extends Form {
    constructor(req) {
        super(req)
        this.opt = {
            viewName: 'P_EmployeeView'
        }
    }
    
}

module.exports = Employee