const ZohoPeopleServices = require('@services/zoho/people')
class Model {
    constructor(req = null) {
        this.req = req
        this.serviceType = "zoho_people"
        this.opt = {}
    }

    getServiceInstance() {
        let servicesInstance = {
            zoho_people: new ZohoPeopleServices(this.req, this.opt)
        }

        return servicesInstance[this.serviceType] || null
    }

    getAll(params = null) {
        return this.getServiceInstance().getData(params)
    }

    saveData() {
        return this.getServiceInstance(this.req).saveData()
    }

    deleteData() {
        return this.getServiceInstance(this.req).deleteData()
    }
}

module.exports = Model