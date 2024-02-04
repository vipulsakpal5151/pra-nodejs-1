const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const logs = require('./src/config/logger')
const mysqlInstance = require('./src/db/mysql.doa')

class AppInitializer {
    constructor() {
        this.app = express()
        this.pathArray = ['user']
        this.mysqlInstance = new mysqlInstance()
    }

    async initialize() {
        try {
            await Promise.all(this.pathArray.map(async (val) => {
                const routes = require(`./src/routes/${val}`)
                const userInstance = new routes({
                  app: this.app, 
                  graphqlHTTP,
                  debugLogs: logs.debugLogs,
                  requiredLogs: logs.requiredLogs,
                  mysqlInstance: this.mysqlInstance
                })

                await userInstance.getRoutes()
                console.log(`Routes initialized for ${val}`)
            }))

            process.on('SIGINT', async () => {
                console.log('Closing MySQL connection before server shutdown...');
                await this.mysqlInstance.close();
                console.log('MySQL connection closed. Exiting...');
                process.exit();
            });
            
            const PORT = 3000
            this.app.listen(PORT, () => {
                console.log(`Server running at http://localhost:${PORT}/graphql`)
            })
        } catch (error) {
            console.error('Initialization failed:', error)
        }
    }
}

const appInitializer = new AppInitializer()
appInitializer.initialize()