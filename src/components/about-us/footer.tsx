import React from "react";
import Link from "next/link";
import { Layout } from "antd";
import SocialSharing from "../social-sharing";
import { socialMediaOptions } from "../../utils/online-platform";
import { FooterLogo } from "../logos";

const { Footer } = Layout;

const AboutUsFooter = () =>
  <Footer className="about-us-footer footer">
    <SocialSharing onlinePlatforms={socialMediaOptions} />
    <Link href="/">
      <Image
        className="footer_logo"
        src="vertical_logo.jpg"
        height={100}
        width={240}
        alt="PPT logo"
      />
    </Link>
  </Footer>

export default AboutUsFooter;
