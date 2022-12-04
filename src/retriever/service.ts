import seedsJSON from '../../resources/seeds.json';
import { OnlinePlatformType, Party } from '../dtos/party-dto';
import { retrieveData } from './utils';

const seeds = seedsJSON as any;

const partyAcronyms = Object.keys(seeds.parties).sort();
const electoralCircles = Object.keys(seeds.parties[partyAcronyms[0]].candidates);
electoralCircles[0] = electoralCircles.splice(1, 1, electoralCircles[0])[0];
const parties: Party[] = retrieveData(seeds, partyAcronyms, electoralCircles);

export const homePageParties = () => {
  const website = parties
    .map((party: any) => party.platforms
      .filter((platform: any) => platform.type === OnlinePlatformType.WEBSITE))[0];

  return parties.map((party: any) => {
    return {
      name: party.name,
      acronym: party.acronym,
      logo: party.logo,
      website: website[0].address
    }
  })
}

export const partyHomePage = (acronym: string) => {
  console.log(acronym);
  const party = parties.filter(party => party.acronym.toLowerCase() === acronym)[0];
  const partyCandidates = party.candidates.filter(candidate => candidate.isLeadCandidate)
    .map(candidate => {
      return {
        name: candidate.name,
        photo: candidate.photo,
        electoralCircle: candidate.electoralCircle,
        biography: candidate.biography
      }
    });

  return {
    name: party.name,
    acronym: party.acronym,
    logo: party.logo,
    description: party.description,
    descriptionSource: party.descriptionSource,
    platforms: party.platforms,
    candidates: partyCandidates,
    manifesto: party.manifesto
  }
}

export const electoralCirclePage = (acronym: string, electoralCircle: string) => {
  const party = parties.filter(party => party.acronym.toLowerCase() === acronym)[0];
  return party.candidates.filter(candidate => candidate.electoralCircle.toString().toLowerCase() == electoralCircle);
}

export const getAllData = () => retrieveData(seeds, partyAcronyms, electoralCircles);

export const getHomepageParties = () => {
  return parties.map(party => {
    return {
      name: party.name,
      acronym: party.acronym,
      logo: party.logo
    }
  })
}

export const getPartyAcronyms = () => partyAcronyms;
