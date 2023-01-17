import { Layout } from "antd";
import { NextPage } from "next";
import LayoutFooter from "../../../components/global/layout-footer";
import LayoutHeader from "../../../components/global/layout-header";
import MetaTags from "../../../components/global/meta-tags";
import PartyHeader from "../../../components/party/header";
import ManifestoSider from "../../../components/party/manifesto/sider";
import { partyAcronymsData, partyHeaderData, partyManifestoData } from "../../../src/retriever/api";


interface PartyManifestoProps {
  party: any,
  manifesto: any
}

const PartyManifesto: NextPage<PartyManifestoProps> = ({ party, manifesto }) => {
  if (!manifesto) {
    return null;
  }

  const { title, sections } = manifesto;

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
        {sections.length && (
          <ManifestoSider
            sections={sections}
            title={title}
          />
        )}
      </Layout.Content>
      <LayoutFooter />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths: object[] = partyAcronymsData().map((acronym: string) => {
    return {
      params: {
        acronym: acronym.toLowerCase(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  // return {
  //   props: {
  //     party: retrieveParty(context.params.acronym)
  //   },
  // };
  return {
    props: {
      party: partyHeaderData(context.params.acronym),
      manifesto: partyManifestoData(context.params.acronym)
    },
  };
};

export default PartyManifesto;
