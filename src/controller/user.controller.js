class UserController {
    constructor({ debugLogs, requiredLogs, UserModel }) {
        this.debugLogs = debugLogs
        this.requiredLogs = requiredLogs,
        this.UserModel = UserModel
    }

    async getUser(id) {
        await this.debugLogs({ name: 'getUser', value: id })
        const data =  await this.UserModel.getUser(id)
        console.log("getUser || data::", data)
        return data
    }
}

module.exports = UserController
