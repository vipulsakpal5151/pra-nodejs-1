const schema = require('../schema/user/index')
const root = require('../root/user/index')
const UserController = require('../controller/user.controller')
const UserModel = require('../model/user.model')

class User {
    constructor({ app, graphqlHTTP, mysqlInstance, logs }) {
        this.app = app
        this.graphqlHTTP = graphqlHTTP
        this.logs = logs
        this.root = new root({ 
            logs,
            UserController: new UserController({
                logs,
                UserModel: new UserModel({
                    logs,
                    mysqlInstance
                })
            }),
        })
    }

    async getRoutes() {
        try {
            const routesConfig = {
                schema: schema,
                rootValue: this.root,
                graphiql: true
            }

            this.app.use('/user/graphql', this.graphqlHTTP(routesConfig))
            this.app.use('/user1/graphql', this.graphqlHTTP(routesConfig))
            return true
        } catch (error) {
            console.error('Error initializing routes for user:', error)
            return false
        }
    }
}

module.exports = User
