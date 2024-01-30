const express = require('express');
const schema = require('./src/schema/user/index');
const root = require('./src/root/user/index');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use('/user/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable GraphQL web interface
}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
});
