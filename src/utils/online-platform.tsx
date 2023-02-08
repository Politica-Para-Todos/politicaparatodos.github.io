import { OnlinePlatform, OnlinePlatformType } from "../retriever/dtos/party-dto";
import { EMAIL_PPT, FACEBOOK_PPT, GITHUB_PPT, INSTAGRAM_PPT, MEDIUM_PPT, TWITTER_PPT } from "./constants";

export const socialMediaOptions: OnlinePlatform[] = [
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
