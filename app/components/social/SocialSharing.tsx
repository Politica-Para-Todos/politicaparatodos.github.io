import { OnlinePlatform, OnlinePlatformType, SOCIAL_MEDIA_OPTIONS } from "../../utils/online-platform";
import SocialIcon from "./SocialIcon";

interface SocialSharingProps {
  theme?: string;
}

const SocialSharing = ({ theme }: SocialSharingProps) =>
  <ul className="social-media-list">
    {SOCIAL_MEDIA_OPTIONS.map((op: OnlinePlatform) => (
      <li key={op.type}>
        <a
          href={
            op.type === OnlinePlatformType.EMAIL
              ? `mailto:${op.address}`
              : op.address
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon icon={op.type} theme={theme} />
        </a>
      </li>
    ))}
  </ul>

export default SocialSharing;
