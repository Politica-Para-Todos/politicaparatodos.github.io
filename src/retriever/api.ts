import { Party } from "../dtos/party-dto";
import {
  electoralCirclePage,
  getAllData,
  getHomepageParties,
  getPartyAcronyms,
  homePageParties,
  partyHomePage,
} from "./service";

export const getHomeParties = () => homePageParties();
export const getPartyCandidates = (acronym: string, electoralCircle: string) =>
  electoralCirclePage(acronym, electoralCircle);
export const retrieveJsonData = (): Party[] => getAllData();

export const retrieveHomepageParties = () => getHomepageParties();
export const retrieveParty = (acronym: string) => partyHomePage(acronym);
export const retrievePartyAcronyms = () => getPartyAcronyms();
