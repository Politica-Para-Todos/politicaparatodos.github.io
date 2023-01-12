import { Layout, Typography } from "antd";
import LayoutFooter from "../../../../components/global/layout-footer";
import LayoutHeader from "../../../../components/global/layout-header";
import MetaTags from "../../../../components/global/meta-tags";
import PartyHeader from "../../../../components/party/header";
import PartyIntro from "../../../../components/party/intro";
import PartyCandidatesTable from "../../../../components/party/party-candidate-table";
import { Candidate } from "../../../../src/dtos/candidate-dto";
import { convertToLabel } from "../../../../src/dtos/electoral-circle-dto";
import { Party } from "../../../../src/dtos/party-dto";
import {
  getPartyCandidates, retrieveParty
} from "../../../../src/retriever/api";

const { Paragraph } = Typography;

interface PartyCandidateProps {
  acronym: string;
  electoralCircle: string;
}

const PartyCandidate = ({ acronym, electoralCircle }: PartyCandidateProps) => {
  const party = retrieveParty(acronym) as Party;
  const candidates = getPartyCandidates(acronym, electoralCircle);

  const circleAsLabel = convertToLabel(electoralCircle!.toString());
  const leadCandidate = candidates.filter(
    (candidate: Candidate) => candidate.isLeadCandidate
  )[0];

  return (
    <Layout>
      {party.name && (
        <MetaTags
          pageTitle={`${party.name} - Círculo eleitoral de ${leadCandidate.electoralCircle}`}
          pageDescription={`Informações sobre o ${party.name} no círculo eleitoral de ${leadCandidate.electoralCircle}`}
          socialTitle={`${party.name} - Círculo eleitoral de ${leadCandidate.electoralCircle}`}
          socialDescription={`Informações sobre o ${party.name} no círculo eleitoral de ${leadCandidate.electoralCircle}`}
          socialImage={`/party-logos/${party.logo}`}
        />
      )}
      <LayoutHeader />
      <Layout.Content>
        <PartyHeader
          party={party}
          subtitle={`${party.acronym} - Círculo eleitoral de ${circleAsLabel}`}
        />
        <PartyIntro spokesperson={leadCandidate} title={leadCandidate.name}>
          <Paragraph className="party-desc">
            {leadCandidate.biography}
          </Paragraph>
          {leadCandidate.biographySource ? (
            <Paragraph>
              Biografia:{" "}
              <a
                href={leadCandidate.biographySource}
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
              </a>
            </Paragraph>
          ) : null}
          {leadCandidate.parliamentLink ? (
            <Paragraph>
              Página do Parlamento:{" "}
              <a
                href={leadCandidate.parliamentLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
              </a>
            </Paragraph>
          ) : null}
        </PartyIntro>
        {candidates && <PartyCandidatesTable candidates={candidates} />}
      </Layout.Content>
      <LayoutFooter />
    </Layout>
  );
};

PartyCandidate.getInitialProps = (appContext: any) => {
  return {
    acronym: appContext.query.acronym,
    electoralCircle: appContext.query.electoralCircle,
  };
};

export default PartyCandidate;
