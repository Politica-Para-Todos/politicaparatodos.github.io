import { getPartyAcronyms as retrievePartyAcronyms, retrieveCandidates, retrieveHomePageParties, retrievePartyHeader, retrievePartyHomePage, retrievePartyManifestoPage } from "./service";

export const homePageData = () => retrieveHomePageParties();
export const partyPageData = (acronym: string) => retrievePartyHomePage(acronym);
export const partyCandidatesData = (acronym: string, electoralCircle: string) =>
  retrieveCandidates(acronym, electoralCircle);
export const partyManifestoData = (acronym: string) => retrievePartyManifestoPage(acronym);

export const partyHeaderData = (acronym: string) => retrievePartyHeader(acronym);

export const partyAcronymsData = () => retrievePartyAcronyms();


// export const getPartyCandidates = (acronym: string, electoralCircle: string) =>
//   electoralCirclePage(acronym, electoralCircle);
// export const retrieveJsonData = (): Party[] => getAllData();

// export const retrieveParty = (acronym: string) => partyHomePage(acronym);
