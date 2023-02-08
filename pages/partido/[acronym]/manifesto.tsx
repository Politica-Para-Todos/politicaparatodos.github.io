import { Layout } from "antd";
import { NextPage } from "next";
import LayoutFooter from "../../../components/global/layout-footer";
import LayoutHeader from "../../../components/global/layout-header";
import MetaTags from "../../../components/global/meta-tags";
import PartyHeader from "../../../components/party/header";
import ManifestoSider from "../../../components/party/manifesto/sider";
import { Retriever, SeedsJsonRetriever } from "../../../src/retriever/service";
import { acronymConversion, Conversion } from "../../../src/utils/manipuation";

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
  const retriever: SeedsJsonRetriever = new Retriever();
  const paths: object[] = retriever.partyAcronyms().map((acronym: string) => {
    return {
      params: {
        acronym: acronymConversion(acronym, Conversion.TO_URL),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const retriever: SeedsJsonRetriever = new Retriever();

  return {
    props: {
      party: retriever.partyHeader(context.params.acronym),
      manifesto: retriever.partyManifestoPage(context.params.acronym)
    },
  };
};

export default PartyManifesto;
