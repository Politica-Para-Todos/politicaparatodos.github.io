export interface OnlinePlatform {
  type: OnlinePlatformType;
  address: string;
}

export enum OnlinePlatformType {
  WEBSITE = "Website",
  TWITTER = "Twitter",
  FACEBOOK = "Facebook",
  EMAIL = "Email",
  INSTAGRAM = "Instagram",
  MEDIUM = "Medium",
  GITHUB = "Github",
}

export type HomePageParty = {
  id: number,
  name: string,
  acronym: string,
  logoFileName: string,
  electoralDistrict: Set<string>
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
