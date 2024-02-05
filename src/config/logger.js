class loggerClass {
    constructor () {
        this.randomId = this.generateRandomId()
    }

    generateRandomId() {
        return [...Array(30)].map(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'[Math.floor(Math.random() * 62)]).join('');
    }

    async debugLogs({ name = '', value = '', ...additionalLogs }) {
        if (true) console.log({ randomId: this.randomId, ...additionalLogs, action: name, value })
    }

    async requiredLogs ({ name = '', value = '', ...additionalLogs }) {
        console.log({ ...additionalLogs, action: name, value })
    }
}

module.exports = loggerClass