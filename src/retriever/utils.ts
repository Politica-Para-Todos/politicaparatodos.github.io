import { Candidate } from '../dtos/candidate-dto';
import { ElectoralCircle } from '../dtos/electoral-circle-dto';
import { OnlinePlatformType, Party } from '../dtos/party-dto';

const buildParty = (rawData: any, acronym: string, electoralCircles: string[]): Party => {
  const party = rawData.parties[acronym]

  return {
    name: party.name,
    acronym: acronym,
    description: party.description,
    descriptionSource: party.description_source,
    logo: party.logo,
    platforms: [
      {
        type: OnlinePlatformType.WEBSITE,
        address: party.website
      },
      {
        type: OnlinePlatformType.EMAIL,
        address: party.email
      },
      {
        type: OnlinePlatformType.FACEBOOK,
        address: party.facebook
      },
      {
        type: OnlinePlatformType.TWITTER,
        address: party.twitter
      },
      {
        type: OnlinePlatformType.INSTAGRAM,
        address: party.instagram
      }
    ],
    manifesto: retrievePartyManifest(rawData.manifestos, acronym),
    candidates: retrievePartyCandidates(rawData.parties, acronym, electoralCircles)
  }
}

const retrieveParties = (rawData: any, acronyms: string[], electoralCircles: string[]) => {
  let parties = [];
  const size = acronyms.length;

  for (let i = 0; i < size; i++) {
    parties.push(buildParty(rawData, acronyms[i], electoralCircles));
  }
  return parties;
}

const retrievePartyCandidates = (rawParties: any, acronym: string, electoralCircles: string[]): Candidate[] => {
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
          electoralCircle: convertToElectoralCircle(electoralCircles[j]),
          photo: validateField(candidate.photo),
          isLeadCandidate: candidate.is_lead_candidate,
          type: candidate.type,
          position: candidate.position,
          biography: validateField(candidate.biography),
          biographySource: validateField(candidate.biography_source),
          parliamentLink: validateField(candidate.link_parlamento),
          photoSource: validateField(candidate.photo_source)
        })
      }
    }

    if (secondary.length > 0) {
      for (let l = 0; l < secondary.length; l++) {
        const candidate = secondary[l];

        candidatesList.push({
          name: candidate.name,
          electoralCircle: convertToElectoralCircle(electoralCircles[j]),
          photo: null,
          isLeadCandidate: candidate.is_lead_candidate,
          type: candidate.type,
          position: candidate.position,
          biography: null,
          biographySource: null,
          parliamentLink: null,
          photoSource: null
        })
      }
    }
  }
  return candidatesList;
}

export const retrievePartyManifest = (rawManifests: any, acronym: string) => {

  if (rawManifests[acronym] === undefined) {
    return null;
  }

  const rawPartyManifest = rawManifests[acronym];

  return {
    partyAcronym: acronym,
    title: rawPartyManifest.title,
    sections: rawPartyManifest.sections
  };
}

export const convertToElectoralCircle = (region: string): ElectoralCircle => {
  switch (region) {
    case 'Açores':
      return ElectoralCircle.ACORES;
    case 'Aveiro':
      return ElectoralCircle.AVEIRO;
    case 'Beja':
      return ElectoralCircle.BEJA;
    case 'Braga':
      return ElectoralCircle.BRAGA;
    case 'Bragança':
      return ElectoralCircle.BRAGANCA;
    case 'Castelo Branco':
      return ElectoralCircle.CASTELO_BRANCO;
    case 'Coimbra':
      return ElectoralCircle.COIMBRA
    case 'Europa':
      return ElectoralCircle.EUROPA
    case 'Évora':
      return ElectoralCircle.EVORA
    case 'Faro':
      return ElectoralCircle.FARO
    case 'Fora da Europa':
      return ElectoralCircle.FORA_EUROPA;
    case 'Guarda':
      return ElectoralCircle.GUARDA;
    case 'Leiria':
      return ElectoralCircle.LEIRIA;
    case 'Lisboa':
      return ElectoralCircle.LISBOA;
    case 'Madeira':
      return ElectoralCircle.MADEIRA;
    case 'Portalegre':
      return ElectoralCircle.PORTALEGRE;
    case 'Porto':
      return ElectoralCircle.PORTO;
    case 'Santarém':
      return ElectoralCircle.SANTAREM;
    case 'Setúbal':
      return ElectoralCircle.SETUBAL;
    case 'Viana do Castelo':
      return ElectoralCircle.VIANA_DO_CASTELO;
    case 'Vila Real':
      return ElectoralCircle.VILA_REAL;
    case 'Viseu':
      return ElectoralCircle.VISEU;
    default:
      return ElectoralCircle.ALL;
  }
}

export const retrieveData = (rawData: any, partyAcronyms: string[], electoralCircles: string[]) =>
  retrieveParties(rawData, partyAcronyms, electoralCircles);

const validateField = (value: string | undefined) => value ? value : null; 
