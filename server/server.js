const express = require('express');
const { ApolloServer } = require("@apollo/server")
const path = require('path');
const db = require('./config/connection');
const { typeDefs } = require('./schemas')
const routes = require('./routes');
const { expressMiddleware } = require("@apollo/server/express4")
const server = new ApolloServer({
  typeDefs
});
const app = express();
const connectMongo = require('./config/connection')
const PORT = process.env.PORT || 3001;
const startApolloServer = async () => {
  await server.start();
  app.use(connectMongo)
  app.use(express.urlencoded({ extended: true }));
  app.use(routes);
  app.use(express.json());
  app.use("/graphql", expressMiddleware(server));
}
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
startApolloServer()