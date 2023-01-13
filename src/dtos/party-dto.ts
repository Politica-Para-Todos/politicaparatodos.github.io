import { Candidate } from "./candidate-dto";
import { Manifesto } from "./manifesto-dto";

export interface Party {
  name: string;
  acronym: string;
  description: string;
  descriptionSource: string;
  logo: string;
  platforms: OnlinePlatform[];
  manifesto: Manifesto | null;
  candidates: Candidate[];
}

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

export interface HomeParty {
  name: string;
  acronym: string;
  logo: string;
}

export type HomePageParty = {
  name: string,
  acronym: string,
  logoFileName: string
}
