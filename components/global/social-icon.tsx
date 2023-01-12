import { OnlinePlatformType } from "../../src/dtos/party-dto";
import { EmailSvgIcon, FacebookSvgIcon, GithubSvgIcon, InstagramSvgIcon, MediumSvgIcon, TwitterSvgIcon } from "./icons";

interface SocialIconProps {
  icon: OnlinePlatformType;
  theme?: string;
}

const SocialIcon = ({ icon, theme }: SocialIconProps) => {

  switch (icon) {
    case OnlinePlatformType.TWITTER:
      return <TwitterSvgIcon theme={theme} />
    case OnlinePlatformType.FACEBOOK:
      return <FacebookSvgIcon theme={theme} />
    case OnlinePlatformType.MEDIUM:
      return <MediumSvgIcon theme={theme} />
    case OnlinePlatformType.EMAIL:
      return <EmailSvgIcon theme={theme} />
    case OnlinePlatformType.INSTAGRAM:
      return <InstagramSvgIcon theme={theme} />
    case OnlinePlatformType.GITHUB:
      return <GithubSvgIcon theme={theme} />
    default:
      return null;
  }
};

export default SocialIcon;
