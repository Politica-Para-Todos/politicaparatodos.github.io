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
  logoUrl: string,
  electoralDistrict: Set<string>
}

export interface PartyHeader {
  name: string,
  acronym: string,
  logoUrl: string,
  description: string,
  descriptionSource: string,
  hasManifesto: boolean,
  socialPlatforms: OnlinePlatform[]
}

export type PartyPage = {
  id: number,
  name: string,
  acronym: string,
  logoUrl?: string,
  description?: string,
  descriptionSource?: string,
  hasManifesto: boolean,
  onlinePlatforms: OnlinePlatform[],
  leadCandidates: PartyPageLeadCandidate[]
}

export type PartyPageLeadCandidate = {
  id: number,
  shortName: string,
  photoFileName: string,
  electoralDistrict: string
}
