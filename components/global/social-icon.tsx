import { EmailSvgIcon, FacebookSvgIcon, GithubSvgIcon, InstagramSvgIcon, MediumSvgIcon, TwitterSvgIcon } from "./icons";

interface SocialIconProps {
  icon: string;
  theme?: string;
}

const SocialIcon = ({ icon, theme }: SocialIconProps) => {

  switch (icon) {
    case 'TWITTER':
      return <TwitterSvgIcon theme={theme} />
    case 'FACEBOOK':
      return <FacebookSvgIcon theme={theme} />
    case 'MEDIUM':
      return <MediumSvgIcon theme={theme} />
    case 'EMAIL':
      return <EmailSvgIcon theme={theme} />
    case 'INSTAGRAM':
      return <InstagramSvgIcon theme={theme} />
    case 'GITHUB':
      return <GithubSvgIcon theme={theme} />
    default:
      return null;
  }
};

export default SocialIcon;
