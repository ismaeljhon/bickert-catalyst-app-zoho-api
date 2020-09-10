class Controller {
    constructor(req = null) {
        this.model = null
        this.req = req
    }
    getModel() {
        let modelFile = '@models/' + this.model
        const model = require(modelFile)
        return new model(this.req)
    }

    async getAll(filters = {}) {
        let result = null

        await this.getModel().getAll(filters).then(queryResponse => {
            result = queryResponse
        }).catch(error => {
            result = error
        })

        return result
    }

    async saveData() {
        let result = null

        await this.getModel().saveData().then(queryResponse => {
            result = queryResponse
        }).catch(error => {
            result = error
        })

        return result
    }

    async deleteData() {
        let result = null

        await this.getModel().deleteData().then(queryResponse => {
            result = queryResponse
        }).catch(error => {
            result = error
        })

        return result
    }
}

module.exports = Controller