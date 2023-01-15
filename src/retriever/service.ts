import seeds from "../../resources/seeds.json";
import { electoralCircleDropdown } from "../dtos/electoral-circle-dto";
import { HomePageParty, OnlinePlatform, OnlinePlatformType, Party, PartyPage, PartyPageLeadCandidate } from "../dtos/party-dto";
import { ELECTORAL_CIRCLES } from "../utils/constants";
import { retrieveData } from "./utils";

const JSON_FILE = seeds as any;

const { parties, manifestos } = JSON_FILE;

const partyAcronyms = Object.keys(parties).sort();

// to remove.. we already have a constant
const electoralCircles = () => {
  const randomParty = partyAcronyms[1] // randomize a party with guarantees of having candidates in all electoral circles 
  return Object.keys(parties[randomParty].candidates);
};

const convertedParties: Party[] = retrieveData(parties, partyAcronyms, electoralCircles());

// export const partyHomePage = (acronym: string) => {
//   const party = getParty(acronym);

//   return {
//     name: party.name,
//     acronym: party.acronym,
//     logo: party.logo,
//     description: party.description,
//     descriptionSource: party.descriptionSource,
//     platforms: party.platforms,
//     candidates: leadCandidates(party),
//     manifesto: getManifesto(acronym)
//   };
// };

// export const electoralCirclePage = (
//   acronym: string,
//   electoralCircle: string
// ) => {
//   const party = getParty(acronym);

//   return party.candidates.filter(candidate =>
//     candidate.electoralCircle.toString().toLowerCase() == electoralCircle
//   );
// };

// export const getAllData = () =>
//   retrieveData(seeds, partyAcronyms, electoralCircles());

// export const getHomepageParties = () =>
//   convertedParties.map(party => {
//     return {
//       name: party.name,
//       acronym: party.acronym,
//       logo: party.logo,
//     };
//   });


export const getPartyAcronyms = () => partyAcronyms;

// export const getManifesto = (acronym: string): Manifesto | null => retrievePartyManifesto(manifestos, acronym.toUpperCase())

// Aux functions
// const getParty = (acronym: string) => {
//   const party = convertedParties.find(party => party.acronym.toLowerCase() === acronym)

//   if (party === undefined) {
//     throw Error("Something's wrong.");
//   }
//   return party;
// }

// const websiteAddress = (party: Party): string =>
//   party.platforms.find(platform =>
//     platform.type === OnlinePlatformType.WEBSITE
//   )?.address ?? ""

// const leadCandidates = (party: Party) =>
//   party.candidates.filter(candidate => candidate.isLeadCandidate)
//     .map(leadCandidate => {
//       return {
//         name: leadCandidate.name,
//         photo: leadCandidate.photo,
//         electoralCircle: leadCandidate.electoralCircle,
//         biography: leadCandidate.biography,
//       };
//     });



// refactor
export const retrieveHomePageParties = (): HomePageParty[] => {
  const homePageParties: HomePageParty[] = [];
  const totalParties = partyAcronyms.length;

  for (let index = 0; index < totalParties; index++) {
    const currentPartyAcronym = partyAcronyms[index];
    const currentParty = parties[currentPartyAcronym];

    homePageParties.push({
      name: currentParty.name,
      acronym: currentPartyAcronym,
      logoFileName: currentParty.logo
    })
  }
  return homePageParties;
}

export const retrievePartyHeader = (acronym: string) => {
  if (!validatePartyAcronym(acronym)) {
    throw Error("Party acronym does not exist");
  }
  const partyAcronym = acronym.toUpperCase();
  const party = parties[partyAcronym];

  return {
    name: party.name,
    acronym: partyAcronym,
    logoFileName: party.logo,
    description: party.description,
    descriptionSource: party.description_source,
    hasManifesto: manifestos[partyAcronym] === undefined ? false : true,
    onlinePlatforms: getOnlinePlatforms(party)
  }

}

export const retrievePartyHomePage = (acronym: string): PartyPage => {

  if (!validatePartyAcronym(acronym)) {
    throw Error("Party acronym does not exist");
  }
  const partyAcronym = acronym.toUpperCase();
  const party = parties[partyAcronym];
  const { candidates } = party;

  const result = {
    name: party.name,
    acronym: partyAcronym,
    logoFileName: party.logo,
    description: party.description,
    descriptionSource: party.description_source,
    hasManifesto: manifestos[partyAcronym] !== undefined ? true : false,
    onlinePlatforms: getOnlinePlatforms(party),
    leadCandidates: getLeadCandidates(candidates)
  }
  console.log(result);
  return result;
}

const validatePartyAcronym = (acronym: string): boolean =>
  partyAcronyms.includes(acronym.toUpperCase());

const getOnlinePlatforms = (party: any): OnlinePlatform[] => [
  {
    type: OnlinePlatformType.EMAIL,
    address: party.email
  },
  {
    type: OnlinePlatformType.WEBSITE,
    address: party.website
  },
  {
    type: OnlinePlatformType.FACEBOOK,
    address: party.facebook
  },
  {
    type: OnlinePlatformType.INSTAGRAM,
    address: party.instagram
  },
  {
    type: OnlinePlatformType.TWITTER,
    address: party.twitter
  }
]

const getLeadCandidates = (candidates: any) => {
  const leadCandidates: PartyPageLeadCandidate[] = [];
  const totalElectoralCircles = ELECTORAL_CIRCLES.length;

  for (let i = 0; i < totalElectoralCircles; i++) {
    const electoralCircle = ELECTORAL_CIRCLES[i];
    const leadCandidate = candidates[electoralCircle].main[0];

    if (leadCandidate) {
      leadCandidates.push({
        name: leadCandidate.name,
        profileFileName: leadCandidate.photo,
        electoralCircle: ELECTORAL_CIRCLES[i]
      });
    }
  }
  return leadCandidates;
}

export const retrieveCandidates = (partyAcronym: string, electoralCircle: string) => {
  if (!validatePartyAcronym(partyAcronym)) {
    throw Error("Party acronym does not exist");
  }
  if (!validateElectoralCircle(electoralCircle)) {
    throw Error("Electoral circle does not exist");
  }
  // if party does not have candidates on that electoral circle throw error

  // where do we response back the electoral circle ?

  const acronym = partyAcronym.toUpperCase();
  const partyElectoralCircle = convertElectoralCircle(electoralCircle);
  const party = parties[acronym];
  const { candidates } = party;
  const partyCandidates = candidates[partyElectoralCircle];
  const leadCandidate = partyCandidates.main[0];
  const mainCandidates = partyCandidates.main.map((candidate: any) => {
    return {
      name: candidate.name,
      position: candidate.position
    }
  });
  const secundaryCandidates = partyCandidates.secundary.map((candidate: any) => {
    return {
      name: candidate.name,
      position: candidate.position
    }
  });

  return {
    electoralCircle: electoralCircle,
    lead: {
      name: leadCandidate.name,
      profilePhotoFileName: leadCandidate.photo,
      biography: leadCandidate.biography,
      biographySource: leadCandidate.biography_source,
      parliamentLink: leadCandidate.link_parlamento
    },
    main: partyCandidates.main.length > 0 ? mainCandidates : null,
    secondary: partyCandidates.secundary.length > 0 ? secundaryCandidates : null
  }
}

const validateElectoralCircle = (electoralCircle: string) =>
  // need to replace this
  electoralCircleDropdown.filter(circle => electoralCircle.toLocaleLowerCase() == circle.value)
    .length > 0 ? true : false

const convertElectoralCircle = (electoralCircle: string) =>
  electoralCircleDropdown.filter(option => electoralCircle == option.value)[0].label

export const retrievePartyManifestoPage = (acronym: string) => {
  const partyAcronym = acronym.toUpperCase();
  const partyManifesto = manifestos[partyAcronym];

  return {
    manifesto: partyManifesto
  }
}
