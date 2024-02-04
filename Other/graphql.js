const fs = require('fs')
const path = require('path')
const { buildSchema } = require('graphql')


// Read the contents of 'schema.graphql' file
const schemaPath = path.join(__dirname, './src/schema.graphql')
const schemaDef = fs.readFileSync(schemaPath, 'utf-8')

// Your GraphQL schema
const schema = buildSchema(schemaDef)

module.exports = schema