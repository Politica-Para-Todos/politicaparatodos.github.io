import { PrismaClient } from "@prisma/client";
import PartiesGrid from "./PartiesGrid";

export interface LegislativeHomeParty {
  id: number,
  acronym: string,
  name: string,
  logoFileName: string,
  electoralCircles: Set<string>
}

const PartiesSection = async () => {
  let currentParties;
  const mockedParties = [{
    id: 'test',
    acronym: 'PSD',
    name: 'Partido Social Democrata',
    logoFileName: 'psd-logo.jpg',
    candidares: []
  }]
  const parties = await getAllLegislativeParties();

  if (parties.length < 1) {
    currentParties = mockedParties;
  }
  else {
    currentParties = parties;
  }

  return (
    <section
      id="parties-section"
      className="section-home-parties-list section--grey"
    >
      <PartiesGrid parties={currentParties} />
    </section>
  );
};

export const getAllLegislativeParties = async (): Promise<LegislativeHomeParty[]> => {
  const prisma = new PrismaClient();
  const queryResult = await prisma.party.findMany({
    select: {
      id: true,
      name: true,
      acronym: true,
      photoFileName: true,
      Candidates: {
        select: {
          ElectoralCircle: {
            select: {
              name: true
            }
          }
        }
      }
    }
  });

  return queryResult.map(result => ({
    id: result.id,
    acronym: result.acronym,
    name: result.name,
    logoFileName: result.photoFileName,
    electoralCircles: new Set(result.Candidates.map(district => district.ElectoralCircle.name))
  }))
}

export default PartiesSection;
