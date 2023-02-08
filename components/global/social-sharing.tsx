import { OnlinePlatform, OnlinePlatformType } from "../../src/retriever/dtos/party-dto";
import SocialIcon from "./social-icon";

interface SocialSharingProps {
  onlinePlatforms: OnlinePlatform[];
  theme?: string;
}

const SocialSharing = ({ onlinePlatforms, theme }: SocialSharingProps) =>
  <ul className="social-media-list">
    {onlinePlatforms.map((op: OnlinePlatform) => (
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
