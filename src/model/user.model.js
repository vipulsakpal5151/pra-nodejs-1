class UserController {
    constructor({ mysqlInstance, logs }) {
        this.mysqlInstance = mysqlInstance,
        this.logs = logs
    }

    async getUser(id) {
        this.logs.debugLogs({ name: 'getUser model: ', value: id })
        const data =  await this.mysqlInstance.query('SELECT * FROM user WHERE id = ?', [id])
        console.log("getUser || data::", data)
        return data[0]
    }
}

module.exports = UserController
