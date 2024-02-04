class loggerClass {
    static async debugLogs ({ name = '', value = '', ...additionalLogs }) {
        if (true) console.log({ ...additionalLogs, action: name, value })
    }

    static async requiredLogs ({ name = '', value = '', ...additionalLogs }) {
        console.log({ ...additionalLogs, action: name, value })
    }
}

module.exports = loggerClass