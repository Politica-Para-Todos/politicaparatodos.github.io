import { SocialPlatform } from "../retriever/dtos/party-dto";
import { EMAIL_PPT, FACEBOOK_PPT, GITHUB_PPT, INSTAGRAM_PPT, MEDIUM_PPT, TWITTER_PPT } from "./constants";

export const pptOnlinePlatforms: SocialPlatform[] = [
  {
    id: 1000,
    platform: 'TWITTER',
    link: TWITTER_PPT,
  },
  {
    id: 1001,
    platform: 'FACEBOOK',
    link: FACEBOOK_PPT,
  },
  {
    id: 1002,
    platform: 'MEDIUM',
    link: MEDIUM_PPT,
  },
  {
    id: 1003,
    platform: 'EMAIL',
    link: EMAIL_PPT,
  },
  {
    id: 1004,
    platform: 'INSTAGRAM',
    link: INSTAGRAM_PPT,
  },
  {
    id: 1005,
    platform: 'GITHUB',
    link: GITHUB_PPT,
  },
];
