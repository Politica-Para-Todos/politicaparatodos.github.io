import { Layout } from "antd";
import { NextPage } from "next";
import LayoutHeader from "../../../src/components/layout-header";
import MetaTags from "../../../src/components/meta-tags";
import PartyHeader from "../../../src/components/party/header";
import ManifestoSider from "../../../src/components/party/manifesto/sider";
import { Section } from "../../../src/dtos/manifesto-dto";
import { Party } from "../../../src/dtos/party-dto";
import {
  retrieveParty,
  retrievePartyAcronyms,
} from "../../../src/retriever/api";
import ManifestoSection from "../../../src/components/party/manifesto/section";

const Sider = Layout.Sider;

interface PartyManifestoProps {
  party: Party;
  // sections: any, //Section[],
  // section: any,
  // sectionId: string,
  // title: string
}

const getSelectedKey = (section_id: string) => (section_id ? [section_id] : []);

const getOpenKey = (sections: Section[], section_id: string) => {
  let openKey: any = [];

  sections.forEach((section) => {
    if (section.subSections !== undefined && section.subSections.length > 0) {
      section.subSections.forEach((subsection) => {
        if (subsection.position.toString() === section_id) {
          openKey = [section.position.toString()];
        }
      });
    }
  });
  return openKey ? openKey : [];
};

const PartyManifesto: NextPage<PartyManifestoProps> = ({ party }) => {
  const manifesto = party.manifesto;

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
        <Layout>
          <Sider width={400} className="party-manifesto-sider">
            {manifesto?.sections.length && (
              <ManifestoSider
                sections={manifesto?.sections}
                party_acronym={party.acronym}
                section_id={manifesto?.sections[0].position}
                selectedKey={getSelectedKey(
                  manifesto?.sections[0].position.toString()
                )}
                openKey={getOpenKey(
                  manifesto?.sections,
                  manifesto?.sections[0].position.toString()
                )}
              />
            )}
          </Sider>
          {/* Commented to avoid TS issues
            <Layout.Content>
            {manifesto?.sections[0] && (
              <ManifestoSection title={title} section={section} section_id={sectionId} />
            )}
          </Layout.Content> */}
        </Layout>
      </Layout.Content>
      {/* <LayoutFooter /> */}
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

export const getStaticProps = (context: any) => {
  return {
    props: {
      party: retrieveParty(context.params.acronym),
    },
  };
};

export default PartyManifesto;
