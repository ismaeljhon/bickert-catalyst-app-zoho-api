const Model = require('@core/Model')

class Form extends Model {
    constructor(req) {
        super(req)
        this.viewName = ''
    }
    
}

module.exports = Form