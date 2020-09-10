const axios = require('axios')
const { response } = require('express')

class ZohoPeopleService {
    constructor(req, opt = {}) {
        this.req = req
        this.opt = opt
        this.prefix = "https://people.zoho.com/people/api/forms/" + opt.viewName
    }

    async getData(params = {}) {
        params.authtoken = "a16f0fdf57857dfc2dfae7a96f70bd5e"

        return axios.get(this.prefix + "/records", { params: params }).then(response => {
            return response.data
        }).catch(error => {
            return error.response.data.response
        })
    }
}
module.exports = ZohoPeopleService