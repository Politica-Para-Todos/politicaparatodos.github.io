import { Layout, Typography } from "antd";
import { DropdownOption, convertToLabel, electoralCircleDropdown } from "../../../../../src/retriever/dtos/electoral-circle-dto";
import { Retriever, SeedsJsonRetriever } from "../../../../../src/retriever/service";
import { Conversion, acronymConversion } from "../../../../../src/utils/manipuation";
import LayoutFooter from "../../../../components/global/layout-footer";
import MetaTags from "../../../../components/global/meta-tags";
import LayoutHeader from "../../../../components/header/LayoutHeader";
import PartyHeader from "../../../../components/party/header";
import PartyIntro from "../../../../components/party/intro";
import PartyCandidatesTable from "../../../../components/party/party-candidate-table";

const { Paragraph } = Typography;

interface PartyCandidateProps {
  party: any,
  candidates: any
}

const PartyCandidate = ({ party, candidates }: PartyCandidateProps) => {

  if (!candidates) {
    return null;
  }

  const circleAsLabel = convertToLabel(candidates.electoralCircle);
  const { lead } = candidates;

  return (
    <Layout>
      {party.name && (
        <MetaTags
          pageTitle={`${party.name} - Círculo eleitoral de ${circleAsLabel}`}
          pageDescription={`Informações sobre o ${party.name} no círculo eleitoral de ${circleAsLabel}`}
          socialTitle={`${party.name} - Círculo eleitoral de ${circleAsLabel}`}
          socialDescription={`Informações sobre o ${party.name} no círculo eleitoral de ${circleAsLabel}`}
          socialImage={`/party-logos/${party.photo}`}
        />
      )}
      <LayoutHeader />
      <Layout.Content>
        <PartyHeader
          party={party}
          subtitle={`${party.acronym} - Círculo eleitoral de ${circleAsLabel}`}
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
  const retriever: SeedsJsonRetriever = new Retriever();
  const paths: object[] = [];

  retriever.partyAcronyms().forEach((acronym: string) => {
    electoralCircleDropdown.forEach((electoral: DropdownOption) => {

      if (electoral.value != "all") {
        paths.push({
          params: {
            acronym: acronymConversion(acronym, Conversion.TO_URL),
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
  const retriever: SeedsJsonRetriever = new Retriever();

  return {
    props: {
      party: retriever.partyHeader(context.params.acronym),
      candidates: retriever.candidates(
        context.params.acronym,
        context.params.electoralCircle
      )
    }
  }
}

export default PartyCandidate;
