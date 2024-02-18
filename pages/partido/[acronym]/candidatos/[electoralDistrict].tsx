import { PrismaClient } from "@prisma/client";
import { Layout, Typography } from "antd";
import LayoutFooter from "../../../../components/global/layout-footer";
import LayoutHeader from "../../../../components/global/layout-header";
import MetaTags from "../../../../components/global/meta-tags";
import PartyHeader from "../../../../components/party/header";
import PartyIntro from "../../../../components/party/intro";
import PartyCandidatesTable from "../../../../components/party/party-candidate-table";
import { convertElectoralDistrictToUrl, electoralDistrictList } from "../../../../src/retriever/dtos/electoral-district.dto";
import { ElectoralDistrict } from "../../../../src/utils/constants";

const { Paragraph } = Typography;

interface PartyCandidateProps {
  party: any,
  candidates: { id: number, position: number, shortName: string, fullName: string, electoralDistrict: ElectoralDistrict, bio?: string, isSub: boolean }[]
}

const PartyCandidate = ({ party, candidates }: PartyCandidateProps) => {

  if (!party || !candidates) {
    return null;
  }

  const electoralDistrict = candidates[0].electoralDistrict;
  const leadCandidate = candidates.filter(candidate => candidate.position === 1 && !candidate.isSub)[0];
  const { acronym, name, logoUrl } = party;
  const { bio, shortName } = leadCandidate;

  return (
    <Layout>
      {name && (
        <MetaTags
          pageTitle={`${name} - Círculo eleitoral de ${electoralDistrict}`}
          pageDescription={`Informações sobre o ${name} no círculo eleitoral de ${electoralDistrict}`}
          socialTitle={`${name} - Círculo eleitoral de ${electoralDistrict}`}
          socialDescription={`Informações sobre o ${name} no círculo eleitoral de ${electoralDistrict}`}
          socialImage={`/party-logos/${logoUrl}`}
        />
      )}
      <LayoutHeader />
      <Layout.Content>
        <PartyHeader
          party={party}
          subtitle={`${acronym} - Círculo eleitoral de ${electoralDistrict}`}
        />
        <PartyIntro spokesperson={leadCandidate} title={shortName}>
          <Paragraph className="party-desc">
            {bio}
          </Paragraph>
          {'leadCandidate.biographySource' ? (
            <Paragraph>
              Biografia:{" "}
              <a
                href={'leadCandidate.biographySource'}
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
              </a>
            </Paragraph>
          ) : null}
          {'leadCandidate.parliamentLink' ? (
            <Paragraph>
              Página do Parlamento:{" "}
              <a
                href={'leadCandidate.parliamentLink'}
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
  const prisma = new PrismaClient();
  const paths: object[] = [];

  const parties = await prisma.party.findMany({
    select: {
      acronym: true
    }
  });

  if (paths.length === 0) {
    return {
      paths,
      fallback: false
    }
  }

  parties.forEach(party => {
    electoralDistrictList().forEach(district => {
      paths.push({
        params: {
          acronym: party.acronym.toLowerCase(),
          electoralDistrict: convertElectoralDistrictToUrl(district as ElectoralDistrict)
        }
      })
    })
  })

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async (context: any) => {
  const prisma = new PrismaClient();
  // Doing query by candidates as by party fails because prisma can't query on a list of candidates
  console.log("ELECTORAL DISTRICT >>>>", context.params.electoralDistrict.toUpperCase().replace('-', ' '))
  const candidates = await prisma.candidate.findMany({
    where: {
      Party: {
        acronym: context.params.acronym.toUpperCase()
      },
      ElectoralDistrict: {
        name: context.params.electoralDistrict.toUpperCase().replace('-', ' ')
      },
    },
    include: {
      Party: true,
      ElectoralDistrict: true
    }
  })

  if (candidates.length === 0) {
    return {
      props: {
        party: null,
        candidates: null
      }
    }
  }

  const party = candidates[0].Party;

  return {
    props: {
      party: {
        id: party.id,
        name: party.name,
        acronym: party.acronym,
        logoUrl: party.logoUrl,
        description: party.description,
        descriptionSource: party.descriptionSource
      },
      candidates: candidates.map(candidate => ({
        id: candidate.id,
        shortName: candidate.shortName,
        fullName: candidate.fullName,
        position: candidate.position,
        electoralDistrict: candidate.ElectoralDistrict.name,
        isSub: candidate.isSub
      }))
    }
  }
}

export default PartyCandidate;
