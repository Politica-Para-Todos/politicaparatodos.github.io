import { PrismaClient } from "@prisma/client";
import { Layout, Typography } from "antd";
import LayoutFooter from "../../components/global/layout-footer";
import LayoutHeader from "../../components/global/layout-header";
import MetaTags from "../../components/global/meta-tags";
import PartyCandidatesList from "../../components/party/candidate-list";
import PartyHeader from "../../components/party/header";
import { PartyPage } from "../../src/retriever/dtos/party-dto";
import { Conversion, acronymConversion } from "../../src/utils/manipuation";

const { Paragraph } = Typography;

interface PartyHomeProps {
  party: PartyPage;
}

const PartyHome = ({ party }: PartyHomeProps) => {
  const { name, acronym, description, descriptionSource, logoUrl, leadCandidates } = party;

  return (
    <Layout>
      {name && (
        <MetaTags
          pageTitle={`Política Para Todos - Conhece o programa e os candidatos do ${acronym}`}
          pageDescription={`Nesta página encontrarás o programa e os candidatos, por círculo eleitoral, do ${name}`}
          socialTitle={`Política Para Todos - Conhece o programa e os candidatos do ${acronym}`}
          socialDescription={`Nesta página encontrarás o programa e os candidatos, por círculo eleitoral, do ${name}`}
          socialImage={`/party-logos/${logoUrl}`}
        />
      )}
      <LayoutHeader />
      <Layout.Content className="party-section">
        <PartyHeader party={party} subtitle="" />
        {/* <PartyIntro spokesperson={null} title="Descrição do Partido">
          {party}
          {!description ? (
            <Paragraph>Descrição não fornecida.</Paragraph>
          ) : (
            <Paragraph>{description}</Paragraph>
            //     {descriptionSource
            //   .split("\n")
            //   .map((desc: string, index: number) => (
            //     <Paragraph key={index}>
            //       Fonte: <a href={desc} target="_blank" rel="noopener noreferrer"> Wikipedia</a>
            //     </Paragraph>
            //   ))
            // }
          )};
        </PartyIntro> */}
        <PartyCandidatesList
          candidates={leadCandidates}
          partyAcronym={acronym}
        />
      </Layout.Content>
      <LayoutFooter />
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const prisma = new PrismaClient();
  const queryResult = await prisma.party.findMany();

  const params: object[] = queryResult.map(party => {
    return {
      params: {
        acronym: acronymConversion(party.acronym, Conversion.TO_URL)
      },
    };
  });

  return {
    paths: params,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const prisma = new PrismaClient();
  // Doing query by candidates as by party fails because prisma can't query on a list of candidates
  const queryResult = await prisma.candidate.findMany({
    where: {
      position: 1,
      isSub: false,
      Party: {
        acronym: context.params.acronym.toUpperCase()
      }
    },
    include: {
      Party: true,
      SocialPlatform: true,
      ElectoralDistrict: true
    }
  })

  const party = queryResult[0].Party;
  const socialPlatform = queryResult[0].SocialPlatform;

  return {
    props: {
      party: {
        id: party.id,
        name: party.name,
        acronym: party.acronym,
        description: party.description,
        descriptionSource: party.descriptionSource,
        logoUrl: party.logoUrl,
        socialPlatforms: socialPlatform.map(social => ({
          id: social.id,
          platform: social.platform,
          link: social.link
        })),
        leadCandidates: queryResult.map(candidate => ({
          id: candidate.id,
          shortName: candidate.shortName,
          electoralDistrict: candidate.ElectoralDistrict.name
        }))
      }
    }
  };
}

export default PartyHome;
