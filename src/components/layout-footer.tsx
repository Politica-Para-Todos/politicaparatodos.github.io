import { Col, Layout, Row } from "antd";
import ContributorsList from "./contributors";
import { memo } from "react";
import Link from "next/link";
import SocialSharing from "./social-sharing";
import { socialMediaOptions } from "../utils/online-platform";
import { VerticalLogo } from "./logos";

const HomeFooter = () => {
  const { Footer } = Layout;

  const TeamLink = () => (
    <Link rel="noopener" href="/about-us">
      <a>aqui</a>
    </Link>
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
            onlinePlatforms={socialMediaOptions}
            theme={"#c4c4c4"}
          />
          <VerticalLogo />
        </Col>
        <Col
          span={24}
          md={{ offset: 4, span: 16 }}
          lg={{ offset: 0, span: 12 }}
          className="footer-info"
        >
          <h2>Quem Somos</h2>
          <p>Podes consultar <TeamLink /> a equipa por detrás do projecto e as suas motivações.
          </p>
          <br />
          <ContributorsList />
        </Col>
      </Row>
    </Footer>
  );
};

export default memo(HomeFooter);
