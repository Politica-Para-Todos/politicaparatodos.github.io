import { PrismaClient } from "@prisma/client";

const PartyHome = () => {

}
<>
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
</>

// export const getStaticPaths = async () => {
//   const retriever: SeedsJsonRetriever = new Retriever();
//   const params: object[] = retriever.partyAcronyms().map((acronym: string) => {
//     return {
//       params: {
//         acronym: acronymConversion(acronym, Conversion.TO_URL)
//       },
//     };
//   });

//   return {
//     paths: params,
//     fallback: false,
//   };
// };

export const getParty = async (acronym: string) => {
  const prisma = new PrismaClient();

  return await prisma.party.findFirstOrThrow({
    where: {
      acronym
    }
  });
}

export default PartyHome;
