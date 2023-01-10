import React from "react";
import Link from "next/link";
import { Layout } from "antd";
import SocialSharing from "../social-sharing";
import { socialMediaOptions } from "../../utils/online-platform";

const { Footer } = Layout;

const AboutUsFooter = () =>
  <Footer className="about-us-footer footer">
    <SocialSharing onlinePlatforms={socialMediaOptions} />
    <Link href="/">
      <AboutUsFooter />
    </Link>
  </Footer>

export default AboutUsFooter;
