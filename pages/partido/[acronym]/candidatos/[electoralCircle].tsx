import { Layout, Typography } from "antd";
import LayoutFooter from "../../../../components/global/layout-footer";
import LayoutHeader from "../../../../components/global/layout-header";
import MetaTags from "../../../../components/global/meta-tags";
import PartyHeader from "../../../../components/party/header";
import PartyIntro from "../../../../components/party/intro";
import PartyCandidatesTable from "../../../../components/party/party-candidate-table";
import { convertToLabel, DropdownOption, electoralCircleDropdown } from "../../../../src/dtos/electoral-circle-dto";
import { partyAcronymsData, partyCandidatesData, partyHeaderData } from "../../../../src/retriever/api";

const { Paragraph } = Typography;

interface PartyCandidateProps {
  partyAcronym: string;
  electoralCircle: string;

  party: any,
  candidates: any
}

const PartyCandidate = ({ party, candidates }: PartyCandidateProps) => {
  const circleAsLabel2 = convertToLabel(candidates.electoralCircle);
  const { lead } = candidates;

  return (
    <Layout>
      {party.name && (
        <MetaTags
          pageTitle={`${party.name} - Círculo eleitoral de ${circleAsLabel2}`}
          pageDescription={`Informações sobre o ${party.name} no círculo eleitoral de ${circleAsLabel2}`}
          socialTitle={`${party.name} - Círculo eleitoral de ${circleAsLabel2}`}
          socialDescription={`Informações sobre o ${party.name} no círculo eleitoral de ${circleAsLabel2}`}
          socialImage={`/party-logos/${party.photo}`}
        />
      )}
      <LayoutHeader />
      <Layout.Content>
        <PartyHeader
          party={party}
          subtitle={`${party.acronym} - Círculo eleitoral de ${circleAsLabel2}`}
        />
        <PartyIntro spokesperson={lead} title={lead.name}>
          <Paragraph className="party-desc">
            {lead.biography}
          </Paragraph>
          {lead.biographySource ? (
            <Paragraph>
              Biografia:{" "}
              <a
                href={lead.biographySource}
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
              </a>
            </Paragraph>
          ) : null}
          {lead.parliamentLink ? (
            <Paragraph>
              Página do Parlamento:{" "}
              <a
                href={lead.parliamentLink}
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

export const getStaticPaths = async () => {
  const paths: object[] = [];

  partyAcronymsData().forEach((acronym: string) => {
    electoralCircleDropdown.forEach((electoral: DropdownOption, index: number) => {

      if (electoral.value != "all") {
        paths.push({
          params: {
            acronym: acronym.toLowerCase(),
            electoralCircle: electoral.value
          }
        })
      }
    })
  });

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async (context: any) => {
  return {
    props: {
      party: partyHeaderData(context.params.acronym),
      candidates: partyCandidatesData(
        context.params.acronym,
        context.params.electoralCircle
      )
    }
  }
}

export default PartyCandidate;
