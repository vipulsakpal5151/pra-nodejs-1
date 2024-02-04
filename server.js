const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const pathArray = ['user']

pathArray.map((val) => {
  const routes  = require(`./src/routes/${val}`);
  const routesIni = new routes(app, graphqlHTTP)
  routesIni.constructor.getRoutes(app, graphqlHTTP)
      .then(result => {
          console.log("result");
      })
      .catch(error => {
          console.error(error);
      })
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
});