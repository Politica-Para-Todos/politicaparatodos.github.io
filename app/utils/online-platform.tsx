import { EMAIL_PPT, FACEBOOK_PPT, GITHUB_PPT, INSTAGRAM_PPT, MEDIUM_PPT, TWITTER_PPT } from "./constants";

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

export const SOCIAL_MEDIA_OPTIONS: OnlinePlatform[] = [
  {
    type: OnlinePlatformType.TWITTER,
    address: TWITTER_PPT,
  },
  {
    type: OnlinePlatformType.FACEBOOK,
    address: FACEBOOK_PPT,
  },
  {
    type: OnlinePlatformType.MEDIUM,
    address: MEDIUM_PPT,
  },
  {
    type: OnlinePlatformType.EMAIL,
    address: EMAIL_PPT,
  },
  {
    type: OnlinePlatformType.INSTAGRAM,
    address: INSTAGRAM_PPT,
  },
  {
    type: OnlinePlatformType.GITHUB,
    address: GITHUB_PPT,
  },
];
