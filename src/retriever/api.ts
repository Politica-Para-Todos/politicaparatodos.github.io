import { Party } from "../dtos/party-dto";
import { electoralCirclePage, getAllData, homePageParties, partyHomePage } from "./service";

export const getHomeParties = () => homePageParties();
export const getParty = (acronym: string) => partyHomePage(acronym);
export const getPartyCandidates = (acronym: string, electoralCircle: string) => electoralCirclePage(acronym, electoralCircle);
export const retrieveJsonData = (): Party[] => getAllData();
