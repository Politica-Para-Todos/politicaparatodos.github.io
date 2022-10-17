import { gql } from "@apollo/client";

export const typeDefs = gql`

  type Query {
    getAllParties: [Party],
    getParty: Party,
    getElectoralCirclePartyCandidates: [Candidate]
  }

  type Party {
    id: String
    name: String
    acronym: String
    description: String
    descriptionSource: String
    mediaPlatforms: [MediaPlatform]
    logo: String
    manifesto: Manifesto
    candidates: [Candidate]
    updatedAt: String
    descriptionUpdatedAt: String
    createdAt: String
  }

  type Candidate {
    id: String
    name: String
    electoralCircle: ElectoralCircle
    photo: String
    isLeadCandidate: Boolean
    type: String
    position: String
    biography: String
    biographySource: String
    parliamentLink: String
    photoSource: String
  }

  enum ElectoralCircle {
    ALL,
    ACORES,
    AVEIRO,
    BEJA,
    BRAGA,
    BRAGANCA,
    CASTELO_BRANCO,
    COIMBRA,
    EVORA,
    EUROPA,
    FARO,
    FORA_EUROPA,
    GUARDA,
    LEIRIA,
    LISBOA,
    MADEIRA,
    PORTALEGRE,
    PORTO,
    SANTAREM,
    SETUBAL,
    VIANA_DO_CASTELO,
    VILA_REAL,
    VISEU
  }

  type Manifesto {
    id: String,
    title: String
    source: String
    sections: [Section]
  }

  type Section {
    position: Int
    content: String
  }
  
  type MediaPlatform {
    platform: Plaftorm
    address: String
  }

  enum Plaftorm {
    WEBSITE
    EMAIL
    FACEBOOK
    INSTAGRAM
    TWITTER
    GITHUB
    MEDIUM
  }
`;
