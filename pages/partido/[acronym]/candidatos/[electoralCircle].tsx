import { Layout, Typography } from "antd";
import LayoutFooter from "../../../../src/components/layout-footer";
import LayoutHeader from "../../../../src/components/layout-header";
import MetaTags from "../../../../src/components/meta-tags";
import PartyHeader from "../../../../src/components/party/header";
import PartyIntro from "../../../../src/components/party/intro";
import PartyCandidatesTable from "../../../../src/components/party/party-candidate-table";
import { Candidate } from "../../../../src/dtos/candidate-dto";
import { convertToLabel } from "../../../../src/dtos/electoral-circle-dto";
import { retrieveParty, getPartyCandidates } from "../../../../src/retriever/api";

const { Paragraph } = Typography;

interface PartyCandidateProps {
  acronym: string
  electoralCircle: string
}

const PartyCandidate = ({acronym, electoralCircle}: PartyCandidateProps) => {

  const party = retrieveParty(acronym);
  const candidates = getPartyCandidates(acronym, electoralCircle);

  const circleAsLabel = convertToLabel(electoralCircle!.toString());
  const leadCandidate = candidates.filter((candidate: Candidate) => candidate.isLeadCandidate)[0];

  const hasBiography = leadCandidate.biographySource;
  const hasParliament = leadCandidate.parliamentLink;

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
        <PartyHeader party={party} subtitle={`${party.acronym} - Círculo eleitoral de ${circleAsLabel}`} />
        <PartyIntro spokesperson={leadCandidate} title={leadCandidate.name}>
          <Paragraph className="party-desc">{leadCandidate.biography}</Paragraph>
          {hasBiography && (
            <Paragraph>Biografia: <a href={leadCandidate.biographySource} target="_blank" rel="noopener noreferrer">aqui</a></Paragraph>
          )}
          {hasParliament && (
            <Paragraph>Página do Parlamento: <a href={leadCandidate.parliamentLink} target="_blank" rel="noopener noreferrer">aqui</a></Paragraph>
          )}
        </PartyIntro>
        {candidates && (
          <PartyCandidatesTable candidates={candidates} />
        )}
      </Layout.Content>
      <LayoutFooter />
    </Layout>
  );
}

PartyCandidate.getInitialProps = (appContext: any) => {
  return {
    acronym: appContext.query.acronym,
    electoralCircle: appContext.query.electoralCircle
  }
}

export default PartyCandidate;
