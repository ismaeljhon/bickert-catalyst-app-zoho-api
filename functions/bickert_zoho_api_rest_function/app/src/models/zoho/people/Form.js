const Model = require('@core/Model')

class Form extends Model {
    constructor(req) {
        super(req)
        this.opt = {
            viewName: ''
        }
    }
    
}

module.exports = Form