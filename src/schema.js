import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import quries from './queries';
import mutations from './mutations';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: quries,
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutations,
  }),
});

