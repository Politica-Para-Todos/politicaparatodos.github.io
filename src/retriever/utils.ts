import { Candidate } from "../dtos/candidate-dto";
import { Manifesto, Section, SubSection, Topic } from "../dtos/manifesto-dto";
import { OnlinePlatformType, Party } from "../dtos/party-dto";

const buildParty = (
  parties: any,
  acronym: string,
  electoralCircles: string[]
): Party => {
  const party = parties[acronym];

  return {
    name: party.name,
    acronym: acronym,
    description: party.description,
    descriptionSource: party.description_source,
    logo: party.logo,
    platforms: [
      {
        type: OnlinePlatformType.WEBSITE,
        address: party.website,
      },
      {
        type: OnlinePlatformType.EMAIL,
        address: party.email,
      },
      {
        type: OnlinePlatformType.FACEBOOK,
        address: party.facebook,
      },
      {
        type: OnlinePlatformType.TWITTER,
        address: party.twitter,
      },
      {
        type: OnlinePlatformType.INSTAGRAM,
        address: party.instagram,
      },
    ],
    manifesto: null,
    candidates: retrievePartyCandidates(
      parties,
      acronym,
      electoralCircles
    ),
  };
};

const retrieveParties = (
  parties: any,
  acronyms: string[],
  electoralCircles: string[]
) => {
  let resultParties = [];
  const size = acronyms.length;

  for (let i = 0; i < size; i++) {
    resultParties.push(buildParty(parties, acronyms[i], electoralCircles));
  }
  return resultParties;
};

const retrievePartyCandidates = (
  rawParties: any,
  acronym: string,
  electoralCircles: string[]
): Candidate[] => {
  let candidatesList: Candidate[] = new Array();
  const currentParty = rawParties[acronym];
  const rawCandidates = currentParty.candidates;
  const size = electoralCircles.length;

  for (let j = 0; j < size; j++) {
    const main = rawCandidates[electoralCircles[j]].main;
    const secondary = rawCandidates[electoralCircles[j]].secundary;

    if (main.length > 0) {
      for (let k = 0; k < main.length; k++) {
        const candidate = main[k];
        candidatesList.push({
          name: candidate.name,
          electoralCircle: null,
          photo: validateField(candidate.photo),
          isLeadCandidate: candidate.is_lead_candidate,
          type: candidate.type,
          position: candidate.position,
          biography: validateField(candidate.biography),
          biographySource: validateField(candidate.biography_source),
          parliamentLink: validateField(candidate.link_parlamento),
          photoSource: validateField(candidate.photo_source),
        });
      }
    }

    if (secondary.length > 0) {
      for (let l = 0; l < secondary.length; l++) {
        const candidate = secondary[l];

        candidatesList.push({
          name: candidate.name,
          electoralCircle: null,
          photo: null,
          isLeadCandidate: candidate.is_lead_candidate,
          type: candidate.type,
          position: candidate.position,
          biography: null,
          biographySource: null,
          parliamentLink: null,
          photoSource: null,
        });
      }
    }
  }
  return candidatesList;
};

export const retrievePartyManifesto = (manifestos: any, acronym: string): Manifesto | null => {
  const partyManifesto = manifestos[acronym];

  if (partyManifesto === undefined) {
    return null;
  }

  const result = {
    title: partyManifesto.title,
    sections: retrieveManifestoSections(partyManifesto.sections)
  }
  return result;
};

const retrieveManifestoSections = (rawSections: any): Section[] =>
  rawSections.map((section: any, index: number) => {

    // console.log('>>>>>>>>>>>>>>>> section: ', index);
    // console.log('>>>>>>>>>>>>>>>> section title: ', section.title);

    // if (index === 7) {
    //   const test = retrieveManifestoSubSections(section.content);
    //   return null;
    // }

    if (section.content[0].content !== undefined) {
      return {
        positions: section.position,
        title: section.title,
        subSections: retrieveManifestoSubSections(section.content),
        topics: null
      }
    }
    return {
      positions: section.position,
      title: section.title,
      subSections: null,
      topics: retrieveManifestoTopics(section.content)
    }
  })

const retrieveManifestoSubSections = (rawSubSections: any): SubSection[] => {
  // console.log("<<<<<>>>>><<<<>>>> ", rawSubSections);

  return rawSubSections.map((subSection: any, index: number) => {
    return {
      topics: retrieveManifestoTopics(subSection.content),
      position: subSection.position,
      title: subSection.title
    }
  })
}

const retrieveManifestoTopics = (rawTopics: any): Topic[] =>
  rawTopics.map((topic: any, index: number) => {
    // console.log('>>>>>>>>>>>>>>>>> topic: ', index);
    if (index === 7) {
      // console.log("<<<<<<<< topic: ", topic);
    }
    return {
      html: topic.html,
      position: topic.position
    }
  })

// // export const convertToElectoralCircle = (region: string): ElectoralCircle => {
// //   switch (region) {
// //     case "Açores":
// //       return ElectoralCircle.ACORES;
// //     case "Aveiro":
// //       return ElectoralCircle.AVEIRO;
// //     case "Beja":
// //       return ElectoralCircle.BEJA;
// //     case "Braga":
// //       return ElectoralCircle.BRAGA;
// //     case "Bragança":
// //       return ElectoralCircle.BRAGANCA;
// //     case "Castelo Branco":
// //       return ElectoralCircle.CASTELO_BRANCO;
// //     case "Coimbra":
// //       return ElectoralCircle.COIMBRA;
// //     case "Europa":
// //       return ElectoralCircle.EUROPA;
// //     case "Évora":
// //       return ElectoralCircle.EVORA;
// //     case "Faro":
// //       return ElectoralCircle.FARO;
// //     case "Fora da Europa":
// //       return ElectoralCircle.FORA_DA_EUROPA;
// //     case "Guarda":
// //       return ElectoralCircle.GUARDA;
// //     case "Leiria":
// //       return ElectoralCircle.LEIRIA;
// //     case "Lisboa":
// //       return ElectoralCircle.LISBOA;
// //     case "Madeira":
// //       return ElectoralCircle.MADEIRA;
// //     case "Portalegre":
// //       return ElectoralCircle.PORTALEGRE;
// //     case "Porto":
// //       return ElectoralCircle.PORTO;
// //     case "Santarém":
// //       return ElectoralCircle.SANTAREM;
// //     case "Setúbal":
// //       return ElectoralCircle.SETUBAL;
// //     case "Viana do Castelo":
// //       return ElectoralCircle.VIANA_DO_CASTELO;
// //     case "Vila Real":
// //       return ElectoralCircle.VILA_REAL;
// //     case "Viseu":
// //       return ElectoralCircle.VISEU;
// //   }
// };

export const retrieveData = (
  parties: any,
  partyAcronyms: string[],
  electoralCircles: string[]
) => retrieveParties(parties, partyAcronyms, electoralCircles);

const validateField = (value: string | undefined) => (value ?? null); 
