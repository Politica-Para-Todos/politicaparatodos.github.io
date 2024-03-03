import { PrismaClient } from "@prisma/client";
import { Layout } from "antd";
import { NextPage } from "next";
import Showdown from "showdown";
import Manifesto from "../../../components/Manifesto";
import LayoutFooter from "../../../components/global/layout-footer";
import LayoutHeader from "../../../components/global/layout-header";
import MetaTags from "../../../components/global/meta-tags";
import PartyHeader from "../../../components/party/header";
import { Conversion, acronymConversion } from "../../../src/utils/manipuation";

interface PartyManifestoProps {
  party: any
}

const PartyManifesto: NextPage<PartyManifestoProps> = ({ party }) => {
  // if (!manifesto) {
  //   return null;
  // }

  // const { title, sections } = manifesto;

  // return (
  //   <Layout className="party-manifesto">
  //     {party.name && (
  //       <MetaTags
  //         pageTitle={`Programa Eleitoral - ${party.name}`}
  //         pageDescription={`Informações sobre o programa eleitoral do ${party.acronym}`}
  //         socialDescription={`Informações sobre o programa eleitoral do ${party.acronym}`}
  //         socialImage={`/banner-${party.acronym}`}
  //         socialTitle={`Programa Eleitoral - ${party.name}`}
  //       />
  //     )}
  //     <LayoutHeader />
  //     <Layout.Content>
  //       <PartyHeader party={party} subtitle={`${party.acronym} - Programa`} />
  //       {sections.length && (
  //         <ManifestoSider
  //           sections={sections}
  //           title={title}
  //         />
  //       )}
  //     </Layout.Content>
  //     <LayoutFooter />
  //   </Layout>
  // );

  return (
    <Layout className="party-manifesto">
      {party.name && (
        <MetaTags
          pageTitle={`Programa Eleitoral - ${party.name}`}
          pageDescription={`Informações sobre o programa eleitoral do ${party.acronym}`}
          socialDescription={`Informações sobre o programa eleitoral do ${party.acronym}`}
          socialImage={`/banner-${party.acronym}`}
          socialTitle={`Programa Eleitoral - ${party.name}`}
        />
      )}
      <LayoutHeader />
      <Layout.Content>
        <PartyHeader party={party} subtitle={`${party.acronym} - Programa`} />
        {Object.keys(party.manifesto).length > 0 && (
          <Manifesto manifesto={party.manifesto} />
        )}
      </Layout.Content>
      <LayoutFooter />
    </Layout>
  );
};

const prisma = new PrismaClient();
const showdown = new Showdown.Converter();

export const getStaticPaths = async () => {
  const parties = await prisma.party.findMany();

  if (!parties) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const params: object[] = parties.map(party => {
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
  const party = await prisma.party.findFirst({
    where: {
      acronym: context.params.acronym.toUpperCase()
    },
    include: {
      SocialPlatform: true
    }
  });

  if (!party) {
    return {
      propps: {
        party: {}
      }
    }
  }

  let manifesto: PptManifesto = {}
  let currentManifestoKey = '';

  if (party.manifestoUrl) {
    const markdown = await (await fetch(party.manifestoUrl)).text();
    const html = showdown.makeHtml(markdown);
    const manifestoElements = html.split('\n');

    manifestoElements.forEach((element, index) => {
      if (element.startsWith('<h1') || element.startsWith('<h2') || element.startsWith('<h3')) {
        currentManifestoKey = `${element.substring(0, 3)}-${index}`;
        manifesto[currentManifestoKey] = [element];
      } else if (currentManifestoKey) {
        manifesto[currentManifestoKey].push(element);
      }
    });
  }

  return {
    props: {
      party: {
        id: party.id,
        name: party.name,
        acronym: party.acronym,
        description: party.description,
        descriptionSource: party.descriptionSource,
        logoUrl: party.logoUrl,
        manifesto: manifesto,
        socialPlatforms: party.SocialPlatform.map(social => ({
          id: social.id,
          platform: social.platform,
          link: social.link
        })),
      }
    }
  }
};

interface PptManifesto {
  [hKey: string]: any
}

export default PartyManifesto;
