import { SocialPlatform, SocialPlatformType } from "../../src/retriever/dtos/party-dto";
import SocialIcon from "./social-icon";

interface SocialSharingProps {
  onlinePlatforms: SocialPlatform[];
  theme?: string;
}

const SocialSharing = ({ onlinePlatforms, theme }: SocialSharingProps) =>
  <ul className="social-media-list">
    {onlinePlatforms.map((sp: SocialPlatform) => (
      <li key={sp.id}>
        <a
          href={
            sp.platform === SocialPlatformType.EMAIL
              ? `mailto:${sp.link}`
              : sp.link
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon icon={sp.platform} theme={theme} />
        </a>
      </li>
    ))}
  </ul>

export default SocialSharing;
