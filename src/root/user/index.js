const mysqlInstance = require('../../db/mysql.doa')
const UserController = require('../../controller/user.controller')

class root {
  constructor({ debugLogs, requiredLogs }) {
    console.log("OKAY ROOT CONSTRUCT")
    this.debugLogs = debugLogs
    this.requiredLogs = requiredLogs,
    this.mysqlInstance = new mysqlInstance(),
    this.UserController = new UserController({
      debugLogs: this.debugLogs,
      requiredLogs: this.requiredLogs,
      mysqlInstance: this.mysqlInstance
    }),
    console.log("OKAY Root this.mysqlInstance ROOOOOOOOT", this.mysqlInstance.executeQuery)
  }

  async getUser({ id }) {
    try {
      const data = await this.UserController.getUser(id)
      return data
    } catch (error) {
      console.error("Error in getUser resolver:", error)
      return null // or throw new Error("Custom error message")
    }
  }

  async getUserEmail({ name }) {
    try {
      const data = await this.UserController.constructor.getUserEmail(name)
      return data
    } catch (error) {
      console.error("Error in getUserEmail resolver:", error.message)
      return null // or throw new Error("Custom error message")
    }
  }
}

module.exports = root
