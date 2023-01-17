import { getPartyAcronyms, retrieveCandidates, retrieveHomePageParties, retrievePartyHeader, retrievePartyHomePage, retrievePartyManifestoPage } from "./service";

export const homePageData = () => retrieveHomePageParties();
export const partyPageData = (acronym: string) => retrievePartyHomePage(acronym);
export const partyCandidatesData = (acronym: string, electoralCircle: string) =>
  retrieveCandidates(acronym, electoralCircle);
export const partyManifestoData = (acronym: string) => retrievePartyManifestoPage(acronym);

export const partyHeaderData = (acronym: string) => retrievePartyHeader(acronym);
export const partyAcronymsData = () => getPartyAcronyms();
