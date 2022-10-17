import { resolvers } from '../../src/graphql/mocks';
import { typeDefs } from '../../src/graphql/type-defs';
import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method !== 'POST') {
    return res.status(501).json({ error: 'Server is expecting a POST request' });
  }
  
  const apolloServer = new ApolloServer({
    typeDefs,
    cache: 'bounded',
    resolvers
  });

  await apolloServer.start();
  apolloServer.createHandler({ path: '/api/graphql' });

  const query = req.body.query;
  const graphqlQuery = query.substring(query.indexOf(' ') + 2, query.indexOf(' {'));

  switch (graphqlQuery) {
    case 'getAllParties':
      return res.status(200).json(resolvers.Query.getAllParties());
    case 'getParty':
      return res.status(200).json(resolvers.Query.getParty());
    case 'getElectoralCirclePartyCandidates':
      return res.status(200).json(resolvers.Query.getElectoralCirclePartyCandidates());
    default:
      return res.status(404).json({ error: 'Graphql query does not exist' });
  }
}

export default handler;
