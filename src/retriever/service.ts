import seeds from "../../resources/seeds.json";
import { Manifesto } from "../dtos/manifesto-dto";
import { HomePageParty, OnlinePlatformType, Party } from "../dtos/party-dto";
import { retrieveData, retrievePartyManifesto } from "./utils";

const JSON_FILE = seeds as any;

const { parties, manifestos } = JSON_FILE;

const partyAcronyms = Object.keys(parties).sort();
const electoralCircles = () => {
  const randomParty = partyAcronyms[1] // randomize a party with guarantees of having candidates in all electoral circles 
  return Object.keys(parties[randomParty].candidates);
};

const convertedParties: Party[] = retrieveData(parties, partyAcronyms, electoralCircles());

// export const homePageParties = () =>
//   convertedParties.map(party => {
//     return {
//       name: party.name,
//       acronym: party.acronym,
//       logo: party.logo,
//       website: websiteAddress(party),
//     };
//   });

export const partyHomePage = (acronym: string) => {
  const party = getParty(acronym);

  return {
    name: party.name,
    acronym: party.acronym,
    logo: party.logo,
    description: party.description,
    descriptionSource: party.descriptionSource,
    platforms: party.platforms,
    candidates: leadCandidates(party),
    manifesto: getManifesto(acronym)
  };
};

export const electoralCirclePage = (
  acronym: string,
  electoralCircle: string
) => {
  const party = getParty(acronym);

  return party.candidates.filter(candidate =>
    candidate.electoralCircle.toString().toLowerCase() == electoralCircle
  );
};

export const getAllData = () =>
  retrieveData(seeds, partyAcronyms, electoralCircles());

export const getHomepageParties = () =>
  convertedParties.map(party => {
    return {
      name: party.name,
      acronym: party.acronym,
      logo: party.logo,
    };
  });

export const getPartyAcronyms = () => partyAcronyms;

export const getManifesto = (acronym: string): Manifesto | null => retrievePartyManifesto(manifestos, acronym.toUpperCase())

// Aux functions
const getParty = (acronym: string) => {
  const party = convertedParties.find(party => party.acronym.toLowerCase() === acronym)

  if (party === undefined) {
    throw Error("Something's wrong.");
  }
  return party;
}

const websiteAddress = (party: Party): string =>
  party.platforms.find(platform =>
    platform.type === OnlinePlatformType.WEBSITE
  )?.address ?? ""

const leadCandidates = (party: Party) =>
  party.candidates.filter(candidate => candidate.isLeadCandidate)
    .map(leadCandidate => {
      return {
        name: leadCandidate.name,
        photo: leadCandidate.photo,
        electoralCircle: leadCandidate.electoralCircle,
        biography: leadCandidate.biography,
      };
    });



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
