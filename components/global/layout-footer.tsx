import { Col, Layout, Row } from "antd";
import Link from "next/link";
import { memo } from "react";
import { pptOnlinePlatforms } from "../../src/utils/online-platform";
import ContributorsList from "./contributors-list";
import { FooterLogo } from "./logos";
import SocialSharing from "./social-sharing";

const HomeFooter = () => {
  const { Footer } = Layout;

  const TeamLink = () => (
    <Link rel="noopener" href="/quem-somos">aqui</Link>
  );

  return (
    <Footer className="footer">
      <Row justify="space-between">
        <Col
          span={24}
          md={{ offset: 4, span: 16 }}
          lg={{ offset: 0, span: 6 }}
          className="footer-social"
        >
          <SocialSharing
            onlinePlatforms={pptOnlinePlatforms}
          />
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
            Podes consultar <TeamLink /> a equipa por detrás do projecto e as
            suas motivações.
          </p>
          <br />
          <p>Quem esteve envolvido no projecto: <ContributorsList /></p>
        </Col>
      </Row>
    </Footer>
  );
};

export default memo(HomeFooter);
