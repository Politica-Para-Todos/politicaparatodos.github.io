import { Party } from "../dtos/party-dto";
import {
  electoralCirclePage, getAllData, getPartyAcronyms, partyHomePage, retrieveCandidates, retrieveHomePageParties, retrievePartyHeader, retrievePartyHomePage
} from "./service";

export const homePageData = () => retrieveHomePageParties();
export const partyPageData = (acronym: string) => retrievePartyHomePage(acronym);
export const partyCandidatesData = (acronym: string, electoralCircle: string) =>
  retrieveCandidates(acronym, electoralCircle);

export const partyHeaderData = (acronym: string) => retrievePartyHeader(acronym);

export const partyAcronymsData = () => getPartyAcronyms();


export const getPartyCandidates = (acronym: string, electoralCircle: string) =>
  electoralCirclePage(acronym, electoralCircle);
export const retrieveJsonData = (): Party[] => getAllData();

export const retrieveParty = (acronym: string) => partyHomePage(acronym);


interface JsonRetriever {
  homePageData(): void;
  partyPageData(partyAcronym: string): void;
  manifestoPageData(partyAcronym: string): void;
  partyElectoralCirclePageData(partyAcronym: string, electoralCircle: string): void;
}
