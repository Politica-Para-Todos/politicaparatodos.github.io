import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Party {
    id: String
    name: String
    acronym: String
    description: String
    descriptionSource: String
    website: String
    email: String
    socialNetwork: [String]
    logo: String
    manifesto: String
    candidate: [String]
    updatedAt: String
    descriptionUpdatedAt: String
    createdAt: String
  }

  type Query {
    getAllParties: [Party] 
  }
`;

const mockedParties = {
  data: {
    getAllParties: [
      {
        id: 'party-id-1',
        name: 'Livre',
        acronym: 'L',
        website: 'www.livre.pt',
        logo: 'volt.png'
      },
      {
        id: 'party-id-2',
        name: 'Chega',
        acronym: 'CH',
        website: 'www.chega.pt',
        logo: 'volt.png'
      }
    ]
  }
};

export const resolvers = {
  Query: {
    getAllParties: () => mockedParties
  }
};

export const mocks = {
  String: () => 'Hello'
};
