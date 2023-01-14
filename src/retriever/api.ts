import { Party } from "../dtos/party-dto";
import {
  electoralCirclePage,
  getAllData, getPartyAcronyms, partyHomePage, retrieveHomePageParties, retrievePartyHomePage
} from "./service";

export const homePageData = () => retrieveHomePageParties();
export const partyPageData = (acronym: string) => retrievePartyHomePage(acronym);

export const getPartyCandidates = (acronym: string, electoralCircle: string) =>
  electoralCirclePage(acronym, electoralCircle);
export const retrieveJsonData = (): Party[] => getAllData();

export const retrieveParty = (acronym: string) => partyHomePage(acronym);
export const retrievePartyAcronyms = () => getPartyAcronyms();


interface JsonRetriever {
  homePageData(): void;
  partyPageData(partyAcronym: string): void;
  manifestoPageData(partyAcronym: string): void;
  partyElectoralCirclePageData(partyAcronym: string, electoralCircle: string): void;
}
