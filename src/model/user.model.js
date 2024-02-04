class UserController {
    constructor({ debugLogs, requiredLogs, mysqlInstance }) {
        this.debugLogs = debugLogs
        this.requiredLogs = requiredLogs,
        this.mysqlInstance = mysqlInstance
    }

    async getUser(id) {
        await this.debugLogs({ name: 'getUser', value: id })
        const data =  await this.mysqlInstance.query('SELECT * FROM user WHERE id = ?', [id])
        console.log("getUser || data::", data)
        return data[0]
    }
}

module.exports = UserController
