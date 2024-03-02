export interface SocialPlatform {
  id: number,
  platform: string;
  link: string;
}

export enum SocialPlatformType {
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
  socialPlatforms: SocialPlatform[]
}

export type PartyPage = {
  id: number,
  name: string,
  acronym: string,
  logoUrl?: string,
  description?: string,
  descriptionSource?: string,
  manifesto: {},
  socialPlatforms: SocialPlatform[],
  leadCandidates: PartyPageLeadCandidate[]
}

export type PartyPageLeadCandidate = {
  id: number,
  shortName: string,
  photoFileName: string,
  electoralDistrict: string
}
