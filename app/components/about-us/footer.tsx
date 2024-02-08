import { Layout } from "antd";
import Link from "next/link";
import { socialMediaOptions } from "../../src/utils/online-platform";
import { FooterLogo } from "../global/logos";
import SocialSharing from "../social/SocialSharing";

const { Footer } = Layout;

const AboutUsFooter = () =>
  <Footer className="about-us-footer footer">
    <SocialSharing onlinePlatforms={socialMediaOptions} />
    <Link href="/">
      <FooterLogo />
    </Link>
  </Footer>

export default AboutUsFooter;
