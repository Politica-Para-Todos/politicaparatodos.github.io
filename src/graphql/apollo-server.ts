import { ApolloServer } from 'apollo-server';
import { mocks, typeDefs } from './apollo-mocks';

const server = new ApolloServer({
  mocks,
  typeDefs,
  // resolvers
});

server.listen().then(({ url }: any) => {
  console.log(`🚀 Server ready at ${url}`)
});
server.getMiddleware({
  path: '/graphql'
});
server.start();
