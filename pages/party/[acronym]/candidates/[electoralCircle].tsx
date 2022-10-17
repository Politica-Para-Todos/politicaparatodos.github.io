import { gql, useQuery } from "@apollo/client";
import { Layout, Typography } from "antd";
import { useRouter } from "next/router";
import LayoutFooter from "../../../../src/components/layout-footer";
import LayoutHeader from "../../../../src/components/layout-header";
import MetaTags from "../../../../src/components/meta-tags";
import PartyHeader from "../../../../src/components/party/header";
import PartyIntro from "../../../../src/components/party/intro";
import PartyCandidatesTable from "../../../../src/components/party/party-candidate-table";
import { Candidate } from "../../../../src/dtos/candidate-dto";
import { convertToLabel } from "../../../../src/dtos/electoral-circle-dto";
import { slugify } from "../../../../src/utils/manipuation";

const { Paragraph } = Typography;

interface PartyCandidateProps {
  candidates: any,
  circles: any,
  acronym: String
}

const PartyCandidate = () => {

  const router = useRouter();
  const { acronym, electoralCircle } = router.query;

  const getElectoralCirclePartyCandidates = gql`
    query {
      getElectoralCirclePartyCandidates {
        id
        name
        acronym
        manifesto
        mediaPlatforms
        candidates {
          id
          name
          isLeadCandidate
          electoralCircle
        }
      }
    }
  `
  const { data, loading, error } = useQuery(getElectoralCirclePartyCandidates);

  if (loading) {
    return null;
  }
  if (error) {
    return null;
  }

  const party = data.getElectoralCirclePartyCandidates;
  const { candidates } = party;
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
          socialImage={`/images/share/banner-${slugify(party.acronym)}.jpg`}
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

export default PartyCandidate;
