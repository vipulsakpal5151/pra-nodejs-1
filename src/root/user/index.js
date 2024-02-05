class root {
  constructor({ UserController, logs}) {
    this.UserController = UserController,
    this.logs = logs
  }

  async getUser({ id }) {
    try {
      const data = await this.UserController.getUser(id)
      return data
    } catch (error) {
      this.logs.debugLogs({ name: 'Error in getUser resolver:', value: error })
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
