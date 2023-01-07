import { Layout } from "antd";
import { NextPage } from "next";
import LayoutHeader from "../../../src/components/layout-header";
import MetaTags from "../../../src/components/meta-tags";
import PartyHeader from "../../../src/components/party/header";
import { Section } from "../../../src/dtos/manifesto-dto";
import { Party } from "../../../src/dtos/party-dto";
import { retrieveParty, retrievePartyAcronyms } from "../../../src/retriever/api";
import LayoutFooter from "../../../src/components/layout-footer";
import ManifestoSider from "../../../src/components/party/manifesto/sider";

interface PartyManifestoProps {
  party: Party
}

// const getSelectedKey = (section_id: string) => section_id ? [section_id] : [];

// const getOpenKey = (sections: Section[], section_id: string) => {
//   let openKey: any = [];

//   sections.forEach(section => {

//     if (section.subSections !== null) {

//       section.subSections.forEach(subsection => {

//         if (subsection.position.toString() === section_id) {
//           openKey = [section.position.toString()];
//         }
//       });
//     }
//   });
//   return openKey ? openKey : [];
// };

const PartyManifesto: NextPage<PartyManifestoProps> = ({ party }) => {
  if (!party.manifesto) {
    return null;
  }
  const { title, sections } = party.manifesto;

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
  const params: object[] = retrievePartyAcronyms().map((acro: string) => {
    return {
      params: {
        acronym: acro.toLowerCase(),
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
    props: {
      party: retrieveParty(context.params.acronym)
    },
  };
};

export default PartyManifesto;
