import { Avatar, Button, Col, Divider, Row } from "antd";
import Link from "next/link";
import { Fragment } from "react";
import { PartyPage } from "../../src/retriever/dtos/party-dto";
import { Conversion, acronymConversion } from "../../src/utils/manipuation";
import SocialSharing from "../global/social-sharing";

interface PartyHeaderProps {
  party: PartyPage;
  subtitle: string;
}

const PartyHeader = ({ party, subtitle }: PartyHeaderProps) => {
  const { name, acronym, logoUrl } = party;
  const website = party.socialPlatforms.find(sp => sp.platform == 'WEBSITE');

  return (
    <section className="party-header">
      <Row>
        <Col span={24}>
          <h1 className="party-header-title">{name}</h1>
          {acronym && (
            <Fragment>
              <Divider />
              <p className="party-header-subtitle">{subtitle}</p>
            </Fragment>
          )}
        </Col>
      </Row>
      <Row typeof="flex" justify="center">
        <Col>
          <Avatar size={200} src={logoUrl} icon="user" />
          <div className="party-header__program-cta">
            {party.manifesto ? (
              <Button
                className="button--grey party-header__program-button"
                key={name}
              >
                <Link href={`/partido/${acronymConversion(party.acronym, Conversion.TO_URL)}/manifesto`} rel="noopener">
                  {`Ver Programa ${party.acronym}`}
                </Link>
              </Button>
            ) : (
              <div className="party-header__program-cta">
                <p>
                  Este partido ainda não apresentou programa eleitoral. <br />
                  Para qualquer correção entra em contacto connosco via{" "}
                  <a href="mailto:contacto@politicaparatodos.pt">e-mail.</a>
                </p>
              </div>
            )}
          </div>
        </Col>
      </Row>
      <Row
        typeof="flex"
        justify="end"
        align="middle"
        className="party-header__social"
      >
        <a href={website?.link} rel="noopener noreferrer" target="_blank">
          {website?.link}
        </a>
        {party.socialPlatforms && (
          <SocialSharing onlinePlatforms={party.socialPlatforms} theme={"#c4c4c4"} />
        )}
      </Row>
    </section >
  )
}

export default PartyHeader;
