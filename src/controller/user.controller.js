class UserController {
    constructor({ debugLogs, requiredLogs, mysqlInstance }) {
        this.debugLogs = debugLogs
        this.requiredLogs = requiredLogs,
        this.mysqlInstance = mysqlInstance
        console.log("OKAY USER this.mysqlInstance USEEEEEEEEEEEE", this.mysqlInstance.executeQuery)
    }

    async getUser(id) {
        await this.debugLogs({ name: 'getUser', value: id })
        const data =  await this.mysqlInstance.executeQuery('SELECT * FROM user WHERE id = ?', [id])
        console.log("getUser || data::", data)
        return data[0]
    }
}

module.exports = UserController
