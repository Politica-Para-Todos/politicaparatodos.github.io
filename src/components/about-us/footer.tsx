import React from "react";
import Link from 'next/link';
import { Layout } from "antd";
import SocialSharing from "../social-sharing";
import { socialMediaOptions } from "../../utils/media-platform";

const Footer = Layout.Footer;

const AboutUsFooter = () => (
  <Footer className="about-us-footer footer">
    <SocialSharing socialMediaList={socialMediaOptions} />
    <Link href="/">
      <img className="footer_logo" src='vertical_logo.jpg' />
    </Link>
  </Footer>
);

export default AboutUsFooter;
