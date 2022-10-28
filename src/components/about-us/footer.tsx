import React from "react";
import Link from 'next/link';
import { Layout } from "antd";
import SocialSharing from "../social-sharing";
import { socialMediaOptions } from "../../utils/online-platform";

const Footer = Layout.Footer;

const AboutUsFooter = () => (
  <Footer className="about-us-footer footer">
    <SocialSharing onlinePlatforms={socialMediaOptions} theme={'#c4c4c4'}/>
    <Link href="/">
      <img className="footer_logo" src='vertical_logo.jpg' alt='PPT logo' />
    </Link>
  </Footer>
);

export default AboutUsFooter;
