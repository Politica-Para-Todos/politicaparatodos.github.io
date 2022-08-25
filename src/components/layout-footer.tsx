import { Col, Layout, Row } from "antd";
import Image from "next/image";
import SocialSharing from "./social-sharing";
import socialSharing from "./social-sharing";
import VerticalLogo from '../../public/vertical_logo.jpg'
import ContributorsList from "./contributors";
import { memo } from "react";
import Link from "next/link";

const HomeFooter = () => {

  const Footer = Layout.Footer;

  return (
    <Footer className="footer">
      <Row justify="space-between">
        <Col span={24} md={{ offset: 4, span: 16 }} lg={{ offset: 0, span: 6 }} className="footer-social">
          <SocialSharing socialMediaList={socialSharing} />
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
