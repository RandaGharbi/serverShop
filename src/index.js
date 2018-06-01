import express from 'express';
import mongoose from 'mongoose';
import env from 'dotenv';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

env.config();
const app = express();

mongoose.connect('mongodb://localhost/printest', () => console.log('CONNECT DB MONGOOSE...'));


// GraphQL API
app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true,
})));
app.listen(process.env.PORT, () => console.log(`Running on port... ${process.env.PORT}`));
