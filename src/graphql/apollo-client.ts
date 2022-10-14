import { ApolloClient, InMemoryCache } from '@apollo/client';

// TODO - return the specific endpoint according with the environment
const endpoint = () => 'http://localhost:3000/api/graphql';

const apolloClient = new ApolloClient({
  uri: endpoint(),
  cache: new InMemoryCache()
});

// TODO - Abstract to a service on bootstrap and exported to be used whenever needed
export default apolloClient;
