const schema = require('../schema/user/index')
const root = require('../root/user/index')

class User {
    constructor({ app, graphqlHTTP, debugLogs, requiredLogs }) {
        this.app = app
        this.graphqlHTTP = graphqlHTTP
        this.debugLogs = debugLogs
        this.requiredLogs = requiredLogs
        this.root = new root({ 
            debugLogs: this.debugLogs,
            requiredLogs: this.requiredLogs
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
