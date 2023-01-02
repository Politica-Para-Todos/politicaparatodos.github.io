import React from "react";
import Link from "next/link";
import { Layout } from "antd";
import SocialSharing from "../social-sharing";
import { socialMediaOptions } from "../../utils/online-platform";
import { FooterLogo } from "../logos";

const AboutUsFooter = () => {
  const { Footer } = Layout

  return (
    <Footer className="about-us-footer footer">
      <SocialSharing onlinePlatforms={socialMediaOptions} theme={"#c4c4c4"} />
      <Link href="/">
        <FooterLogo />
      </Link>
    </Footer>
  )
}

export default AboutUsFooter;
