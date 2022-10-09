import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Party {
    id: String,
    name: String,
    acronym: String
    website: String
  }

  type Query {
    getAllParties: [Party] 
  }
`;

// export const resolvers = {
//   Query: {
//     getAllParties: () => {
//       id: 
//     },
//   },
// };

export const mocks = {
  String: () => 'Hello',
  Int: () => 6,
  Float: () => 22.1,
};
