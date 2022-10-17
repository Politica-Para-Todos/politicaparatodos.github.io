import { Col, Layout, Row } from "antd";
import Image from "next/image";
import VerticalLogo from '../../public/vertical_logo.jpg'
import ContributorsList from "./contributors";
import { memo } from "react";
import Link from "next/link";
import SocialSharing from "./social-sharing";
import { socialMediaOptions } from "../utils/media-platform";

const HomeFooter = () => {

  const Footer = Layout.Footer;

  return (
    <Footer className="footer">
      <Row justify="space-between">
        <Col span={24} md={{ offset: 4, span: 16 }} lg={{ offset: 0, span: 6 }} className="footer-social">
          <SocialSharing socialMediaList={socialMediaOptions} theme={"#c4c4c4"} />
          <Image alt="vertical_logo" src={VerticalLogo}/>
        </Col>
        <Col span={24} md={{ offset: 4, span: 16 }} lg={{ offset: 0, span: 12 }} className="footer-info">
          <h2>Quem Somos</h2>
          <p>Podes consultar
            <Link rel="noopener" href="/about-us">
              <a>aqui</a>
            </Link> a equipa por detrás do projecto e as suas motivações.</p>
          {/* <p>Podes consultar <a rel="noopener" href="/about-us">aqui</a> a equipa por detrás do projecto e as suas motivações.</p> */}
          <br />
          <ContributorsList />
        </Col>
      </Row>
    </Footer>
  )
}

export default memo(HomeFooter);
