import { Layout, Typography } from "antd";
import LayoutFooter from "../../components/global/layout-footer";
import LayoutHeader from "../../components/global/layout-header";
import MetaTags from "../../components/global/meta-tags";
import PartyCandidatesList from "../../components/party/candidate-list";
import PartyHeader from "../../components/party/header";
import PartyIntro from "../../components/party/intro";
import { partyAcronymsData } from "../../src/retriever/api";
import { PartyPage } from "../../src/retriever/dtos/party-dto";
import { Retriever, SeedsJsonRetriever } from "../../src/retriever/service";
import { acronymConversion, Conversion } from "../../src/utils/manipuation";

const { Paragraph } = Typography;

interface PartyHomeProps {
  party: PartyPage;
}

const PartyHome = ({ party }: PartyHomeProps) =>
  <Layout>
    {party.name && (
      <MetaTags
        pageTitle={`Política Para Todos - Conhece o programa e os candidatos do ${party.acronym}`}
        pageDescription={`Nesta página encontrarás o programa e os candidatos, por círculo eleitoral, do ${party.name}`}
        socialTitle={`Política Para Todos - Conhece o programa e os candidatos do ${party.acronym}`}
        socialDescription={`Nesta página encontrarás o programa e os candidatos, por círculo eleitoral, do ${party.name}`}
        socialImage={`/party-logos/${party.logoFileName}`}
      />
    )}
    <LayoutHeader />
    <Layout.Content className="party-section">
      <PartyHeader party={party} subtitle="" />
      <PartyIntro spokesperson={null} title="Descrição do Partido">
        <Paragraph>{party.description}</Paragraph>
        {party.descriptionSource
          .split("\n")
          .map((desc: string, index: number) => (
            <Paragraph key={index}>
              Fonte:{" "}
              <a href={desc} target="_blank" rel="noopener noreferrer">
                Wikipedia
              </a>
            </Paragraph>
          ))}
      </PartyIntro>
      <PartyCandidatesList
        candidates={party.leadCandidates}
        partyAcronym={party.acronym}
      />
    </Layout.Content>
    <LayoutFooter />
  </Layout>

export const getStaticPaths = async () => {
  const params: object[] = partyAcronymsData().map((acronym: string) => {
    return {
      params: {
        acronym: acronymConversion(acronym, Conversion.TO_URL)
      },
    };
  });

  return {
    paths: params,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const retriever: SeedsJsonRetriever = new Retriever();
  return {
    props: {
      party: retriever.partyHomePage(context.params.acronym)
    }
  };
}

export default PartyHome;
