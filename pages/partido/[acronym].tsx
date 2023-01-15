import { Layout, Typography } from "antd";
import LayoutFooter from "../../components/global/layout-footer";
import LayoutHeader from "../../components/global/layout-header";
import MetaTags from "../../components/global/meta-tags";
import PartyCandidatesList from "../../components/party/candidate-list";
import PartyHeader from "../../components/party/header";
import PartyIntro from "../../components/party/intro";
import { PartyPage } from "../../src/dtos/party-dto";
import { partyAcronymsData, partyPageData } from "../../src/retriever/api";

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
        acronym: acronym.toLowerCase(),
      },
    };
  });

  return {
    paths: params,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  return {
    props: { party: partyPageData(context.params.acronym) }
  };
};

// Don't know where this was used..
const thematics = [
  {
    value: 10,
    icon: "build",
    color: "green",
  },
  {
    value: 30,
    icon: "build",
    color: "yellow",
  },
  {
    value: 20,
    icon: "build",
    color: "red",
  },
  {
    value: 25,
    icon: "build",
    color: "blue",
  },
  {
    value: 15,
    icon: "build",
    color: "gray",
  },
];

const analytics = {
  words: "310K",
  views: "310K",
  reading: "302 min",
  comments: "3.5K",
};

export default PartyHome;
