const schema = require('../schema/user/index')
const root = require('../root/user/index')
const UserController = require('../controller/user.controller')

class User {
    constructor({ app, graphqlHTTP, debugLogs, requiredLogs, mysqlInstance }) {
        this.app = app
        this.graphqlHTTP = graphqlHTTP
        this.debugLogs = debugLogs
        this.requiredLogs = requiredLogs
        this.root = new root({ 
            debugLogs,
            requiredLogs,
            UserController: new UserController({
                debugLogs,
                requiredLogs,
                mysqlInstance
            }),
        })
    }

    async getRoutes() {
        try {
            this.app.use('/user/graphql', this.graphqlHTTP({
                schema: schema,
                rootValue: this.root,
                graphiql: true, // Enable GraphQL web interface
            }))

            this.app.use('/user1/graphql', this.graphqlHTTP({
                schema: schema,
                rootValue: this.root,
                graphiql: true, // Enable GraphQL web interface
            }))

            return true
        } catch (error) {
            console.error('Error initializing routes for user:', error)
            return false
        }
    }
}

module.exports = User
