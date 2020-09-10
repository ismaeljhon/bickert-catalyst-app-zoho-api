const ZohoPeopleServices = require('@services/zoho/people')
class Model {
    constructor(req = null) {
        this.req = req
        this.serviceType = "zoho_people"
    }

    getServiceInstance() {
        let servicesInstance = {
            zoho_people: new ZohoPeopleServices(this.req)
        }

        return servicesInstance[this.serviceType] || null
    }

    getAll(filters = null) {
        return this.getServiceInstance().getData(filters)
    }

    saveData() {
        return this.getServiceInstance(this.req).saveData()
    }

    deleteData() {
        return this.getServiceInstance(this.req).deleteData()
    }
}

module.exports = Model