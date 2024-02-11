import { Avatar, Button, Col, Divider, Row } from "antd";
import Link from "next/link";
import { Fragment } from "react";
import { PartyPage } from "../../src/retriever/dtos/party-dto";
import { Conversion, acronymConversion } from "../../src/utils/manipuation";
import { renderPartyLogo } from "../global/logos";

interface PartyHeaderProps {
  party: PartyPage;
  subtitle: string;
}

const PartyHeader = ({ party, subtitle }: PartyHeaderProps) => {
  const { name, acronym } = party;
  // const website = party.onlinePlatforms.filter(
  //   (op: OnlinePlatform) => op.type == OnlinePlatformType.WEBSITE
  // )[0];

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
      <Row typeof="flex" justify="center">
        <Col>
          <Avatar size={200} src={renderPartyLogo(party.logoFileName)} icon="user" />
          <div className="party-header__program-cta">
            {party.hasManifesto && (
              <Button
                className="button--grey party-header__program-button"
                key={party.name}
              >
                <Link href={`/partido/${acronymConversion(party.acronym, Conversion.TO_URL)}/manifesto`} rel="noopener">
                  {`Ver Programa ${party.acronym}`}
                </Link>
              </Button>
            )}
          </div>
          {!party.hasManifesto && (
            <div className="party-header__program-cta">
              <p>
                Este partido ainda não apresentou programa eleitoral. <br />
                Para qualquer correção entra em contacto connosco via{" "}
                <a href="mailto:contacto@politicaparatodos.pt">e-mail.</a>
              </p>
            </div>
          )}
        </Col>
      </Row>
      <Row
        typeof="flex"
        justify="end"
        align="middle"
        className="party-header__social"
      >
        <a href={"website.address"} rel="noopener noreferrer" target="_blank">
          {"website.address"}
        </a>
        {/* <SocialSharing onlinePlatforms={party.onlinePlatforms} theme={"#c4c4c4"} /> */}
      </Row>
    </section>
  );
};

export default PartyHeader;
