import React from "react";
import { Row, Col, Typography, Avatar } from "antd";
import { Candidate } from "../../dtos/candidate-dto";

const { Title, Paragraph } = Typography;

interface PartyIntroProps extends React.HTMLProps<HTMLDivElement> {
  spokesperson: Candidate | null,
  title: string,
  children: any
}

const PartyIntro = (props: PartyIntroProps) => {

  const { title, spokesperson, children } = props;

  return (
    <section className="party-intro">
      <Row>
        <Col md={{ offset: 4, span: 16 }} lg={{ offset: 0, span: 16 }}>
          <Title level={2}>{title}</Title>
          <div className="party-intro__text">
            {children}
          </div>
        </Col>
        {spokesperson && (<Col span={24} lg={8} className="party-intro__spokesperson">
          <Avatar size={160} src={`/party-candidates/${spokesperson.photo}`} icon="user" />
          <Title className="party-intro__spokesperson-name" level={3}>{spokesperson.name}</Title>
          <Paragraph className="party-intro__spokesperson-description">Cabeça de lista</Paragraph>
        </Col>
        )}
      </Row>
    </section>
  )
}

export default PartyIntro;
