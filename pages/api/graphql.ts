import { mocks, typeDefs, resolvers } from '../../src/graphql/apollo-mocks';
import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method !== 'POST') {
    return 'ERROR';
  }
  const apolloServer = new ApolloServer({
    typeDefs,
    cache: 'bounded',
    mocks,
    resolvers
  });

  await apolloServer.start();
  apolloServer.createHandler({ path: '/api/graphql' });

  return res.status(200).json(resolvers.Query.getAllParties());
}

export default handler;
