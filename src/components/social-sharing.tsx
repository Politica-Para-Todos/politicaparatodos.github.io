import Link from "next/link";
import { MediaPlatform, MediaPlatformOption, socialMediaOptions } from "../utils/media-platform";
import SocialIcon from "./social-icon";

const getHrefFromUrl = (type: MediaPlatform, url: string) => {
  return type.valueOf() === MediaPlatform.EMAIL.valueOf() ? `mailto:${url}` : url;
}

const SocialSharing = (props: any) => {
  const { socialMediaList, theme } = props;

  return (
    <ul className="social-media-list">
      {socialMediaOptions.map((media: MediaPlatformOption) => (
        <li key={media.type.toString()}>
          <a
            href={getHrefFromUrl(media.type, media.url)}
            target='_blank'
            rel="noopener noreferrer"
          >
            <SocialIcon icon={media.type.toString()} theme={theme} />
          </a>
        </li>
      ))}
    </ul >
  );
}

export default SocialSharing
