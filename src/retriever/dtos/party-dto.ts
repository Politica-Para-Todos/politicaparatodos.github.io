import { OnlinePlatform } from "../../../app/utils/online-platform"

export type HomePageParty = {
  name: string,
  acronym: string,
  logoFileName: string
}

export interface PartyHeader {
  name: string,
  acronym: string,
  logoFileName: string,
  description: string,
  descriptionSource: string,
  hasManifesto: boolean,
  onlinePlatforms: OnlinePlatform[]
}

export type PartyPage = {
  name: string,
  acronym: string,
  logoFileName: string,
  description: string,
  descriptionSource: string,
  hasManifesto: boolean,
  onlinePlatforms: OnlinePlatform[],
  leadCandidates: PartyPageLeadCandidate[]
}

export type PartyPageLeadCandidate = {
  name: string,
  profileFileName: string,
  electoralCircle: string
}
