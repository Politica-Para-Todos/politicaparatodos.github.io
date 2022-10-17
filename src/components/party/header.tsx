import React, { Fragment } from "react";
import { Row, Col, Divider, Avatar, Button } from "antd";
import SocialSharing from "../social-sharing";
import { OnlinePlatform, Party, Plaftorm } from "../../dtos/party-dto";

interface PartyHeaderProps {
  party: Party
  subtitle: string
}

const PartyHeader = (props: PartyHeaderProps) => {

  const { party, subtitle } = props;
  const hasSections = party.manifesto.sections.length > 0;
  const onlinePlatforms = party.platforms;
  const website = onlinePlatforms.filter((op: OnlinePlatform) => op.platform == Plaftorm.WEBSITE)[0];

  return (
    <section className="party-header">
      <Row>
        <Col span={24}>
          <h1 className="party-header-title">{party.name}</h1>
          {party.acronym && (
            <Fragment>
              <Divider />
              <p className="party-header-subtitle">{subtitle}</p>
            </Fragment>
          )}
        </Col>
      </Row>
      <Row typeof='flex' justify="center">
        <Col>
          <Avatar size={200} src={party.logo} icon='user' />
          {party.manifesto && hasSections && (
            <div className="party-header__program-cta">
              <Button
                className='button--grey party-header__program-button'
                href={`/party/${party.acronym}/manifesto`}
                rel='noopener'>
                {`Ver Programa ${party.acronym}`}
              </Button>
            </div>
          )}
          {party.manifesto && !hasSections && (
            <div className="party-header__program-cta">
              <p>
                Este partido ainda não apresentou programa eleitoral. <br />
                Para qualquer correção entra em contacto connosco via <a href="mailto:contacto@politicaparatodos.pt">e-mail.</a>
              </p>
            </div>
          )}
        </Col>
      </Row>
      <Row typeof='flex' justify="end" align="middle" className="party-header__social">
        <a href={website.address} rel="noopener noreferrer" target="_blank">{website.platform}</a>
        <SocialSharing socialMediaList={onlinePlatforms} theme={"#c4c4c4"} />
      </Row>
    </section>
  )
}

export default PartyHeader;
