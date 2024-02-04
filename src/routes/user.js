const schema = require('../schema/user/index');
const root = require('../root/user/index');

class User {
    constructor(app, graphqlHTTP) {
        console.log("OKAY CONSTRUCT");
        this.app = app
        this.graphqlHTTP = graphqlHTTP
    }

    static async getRoutes(app, graphqlHTTP) {
        app.use('/user/graphql', graphqlHTTP({
            schema: schema,
            rootValue: root,
            graphiql: true, // Enable GraphQL web interface
        }));

        app.use('/user1/graphql', graphqlHTTP({
            schema: schema,
            rootValue: root,
            graphiql: true, // Enable GraphQL web interface
        }));

        return true
    }
}

module.exports = User;