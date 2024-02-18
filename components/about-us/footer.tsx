import { Layout } from "antd";
import Link from "next/link";
import { pptOnlinePlatforms } from "../../src/utils/online-platform";
import { FooterLogo } from "../global/logos";
import SocialSharing from "../global/social-sharing";

const { Footer } = Layout;

const AboutUsFooter = () =>
  <Footer className="about-us-footer footer">
    <SocialSharing onlinePlatforms={pptOnlinePlatforms} />
    <Link href="/">
      <FooterLogo />
    </Link>
  </Footer>

export default AboutUsFooter;
