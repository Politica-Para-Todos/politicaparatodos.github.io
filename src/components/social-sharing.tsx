import { OnlinePlatform } from "../dtos/party-dto";
import SocialIcon from "./social-icon";

interface SocialSharingProps {
  socialMediaList: OnlinePlatform[],
  theme: string
}

const getHrefFromUrl = (media: OnlinePlatform) => {
  return media.name === 'email' ? `mailto:${media.url}` : media.url;
}

const SocialSharing = (props: SocialSharingProps) => {
  const { socialMediaList, theme } = props;

  return (
    <ul className="social-media-list">
      {socialMediaList.map((sn: OnlinePlatform) => (
        <li key={sn.name}>
          <a
            href={getHrefFromUrl(sn)}
            target='_blank'
            rel="noopener noreferrer"
          >
            <SocialIcon icon={sn.name} theme={theme} />
          </a>
        </li>
      ))}
    </ul >
  );
}

export default SocialSharing
