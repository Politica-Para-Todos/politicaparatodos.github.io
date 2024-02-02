import { Col, Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import Link from "next/link";
import { FooterLogo } from "../global/logos";
import ContributorsList from "./ContributorsList";

const LayoutFooter = () =>
  <Footer className="footer">
    <Row justify="space-between">
      <Col
        span={24}
        md={{ offset: 4, span: 16 }}
        lg={{ offset: 0, span: 6 }}
        className="footer-social"
      >
        {/* <SocialSharing
          onlinePlatforms={socialMediaOptions}
        /> */}
        <FooterLogo />
      </Col>
      <Col
        span={24}
        md={{ offset: 4, span: 16 }}
        lg={{ offset: 0, span: 12 }}
        className="footer-info"
      >
        <h2>Quem Somos</h2>
        <p>
          Podes consultar <Link rel="noopener" href="/about-us">aqui</Link> a equipa por detrás do projecto e as
          suas motivações.
        </p>
        <br />
        <p>Quem esteve envolvido no projecto: <ContributorsList /></p>
      </Col>
    </Row>
  </Footer>

export default LayoutFooter;
