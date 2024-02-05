class UserController {
    constructor({ UserModel, logs }) {
        this.UserModel = UserModel,
        this.logs = logs
    }

    async getUser(id) {
        this.logs.debugLogs({ name: 'getUser: ', value: id })
        const data =  await this.UserModel.getUser(id)
        console.log("getUser || data::", data)
        return data
    }
}

module.exports = UserController
