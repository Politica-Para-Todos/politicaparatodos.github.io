import seeds from "../../resources/seeds.json";
import { acronymConversion, Conversion } from "../utils/manipuation";
import { CandidatePage } from "./dtos/candidate-dto";
import { HomePageParty, PartyHeader, PartyPage, SocialPlatform } from "./dtos/party-dto";

export interface SeedsJsonRetriever {
  partyAcronyms(): string[];
  homePageParties(): HomePageParty[];
  partyHeader(acronym: string): PartyHeader;
  partyHomePage(urlAcronym: string): PartyPage;
  candidates(urlAcronym: string, electoralCircle: string): CandidatePage | null;
  partyManifestoPage(urlAcronym: string): any | null;
}

export class Retriever implements SeedsJsonRetriever {
  homePageParties(): HomePageParty[] {
    throw new Error("Method not implemented.");
  }
  partyHomePage(urlAcronym: string): PartyPage {
    throw new Error("Method not implemented.");
  }
  candidates(urlAcronym: string, electoralCircle: string): CandidatePage | null {
    throw new Error("Method not implemented.");
  }
  private readonly JSON_FILE = seeds as any;

  partyAcronyms() {
    const { parties } = this.JSON_FILE;
    return Object.keys(parties).sort();
  }

  // homePageParties(): HomePageParty[] {
  //   const { parties } = this.JSON_FILE;
  //   const homePageParties: HomePageParty[] = [];
  //   const totalParties = this.partyAcronyms().length;

  //   for (let index = 0; index < totalParties; index++) {
  //     const currentPartyAcronym = this.partyAcronyms()[index];
  //     const currentParty = parties[currentPartyAcronym];

  //     homePageParties.push({
  //       name: currentParty.name,
  //       acronym: currentPartyAcronym,
  //       logoFileName: currentParty.logo
  //     })
  //   }
  //   return homePageParties;
  // }

  partyHeader(urlAcronym: string): PartyHeader {
    const { parties, manifestos } = this.JSON_FILE;
    const partyAcronym = this.convertToPartyAcronym(urlAcronym);
    const party = parties[partyAcronym];

    return {
      name: party.name,
      acronym: partyAcronym,
      logoUrl: party.logo,
      description: party.description,
      descriptionSource: party.description_source,
      hasManifesto: manifestos[partyAcronym] === undefined ? false : true,
      socialPlatforms: this.getOnlinePlatforms(party)
    }
  }

  // partyHomePage(urlAcronym: string): PartyPage {
  //   const { parties, manifestos } = this.JSON_FILE;
  //   const partyAcronym = this.convertToPartyAcronym(urlAcronym);
  //   const party = parties[partyAcronym];
  //   const { candidates } = party;

  //   return {
  //     name: party.name,
  //     acronym: partyAcronym,
  //     logoFileName: party.logo,
  //     description: party.description,
  //     descriptionSource: party.description_source,
  //     hasManifesto: manifestos[partyAcronym] !== undefined ? true : false,
  //     onlinePlatforms: this.getOnlinePlatforms(party),
  //     leadCandidates: this.getLeadCandidates(candidates)
  //   }
  // }

  // candidates(urlAcronym: string, electoralCircle: string): CandidatePage | null {
  //   const partyAcronym = this.convertToPartyAcronym(urlAcronym);
  //   const partyElectoralCircle = this.convertElectoralCircle(electoralCircle);
  //   const { parties } = this.JSON_FILE;
  //   const party = parties[partyAcronym];
  //   const { candidates } = party;

  //   if (candidates[partyElectoralCircle].main.length === 0) {
  //     return null;
  //   }

  //   const partyCandidates = candidates[partyElectoralCircle];
  //   const leadCandidate = partyCandidates.main[0];

  //   return {
  //     electoralCircle: electoralCircle,
  //     lead: {
  //       name: leadCandidate.name,
  //       profilePhotoFileName: leadCandidate.photo,
  //       biography: leadCandidate.biography,
  //       biographySource: leadCandidate.biography_source,
  //       parliamentLink: leadCandidate.link_parlamento
  //     },
  //     main: partyCandidates.main.length > 0 ? this.getMainCandidates(partyCandidates) : null,
  //     secondary: partyCandidates.secundary.length > 0 ? this.getSecundaryCandidates(partyCandidates) : null
  //   }
  // }

  partyManifestoPage(urlAcronym: string): any | null {
    const { manifestos } = this.JSON_FILE;
    const partyAcronym = this.convertToPartyAcronym(urlAcronym);
    return manifestos[partyAcronym] != undefined ? manifestos[partyAcronym] : null
  }

  private convertToPartyAcronym(acronym: string) {
    if (acronym === 'ppd-psd' || acronym === 'ppd-psd.cds-pp' || acronym === 'pctp-mrpp' || acronym === 'ppd-psd.cds-pp.ppm') {
      return acronymConversion(acronym, Conversion.TO_OFFICIAL_ACRONYM);
    }
    return acronym.toUpperCase();
  }

  // private getMainCandidates(candidates: any) {
  //   return candidates.main.map((candidate: any) => {
  //     return {
  //       name: candidate.name,
  //       position: candidate.position
  //     }
  //   });
  // }

  // private getSecundaryCandidates(candidates: any) {
  //   return candidates.secundary.map((candidate: any) => {
  //     return {
  //       name: candidate.name,
  //       position: candidate.position
  //     }
  //   });
  // }

  // private getLeadCandidates(candidates: any): PartyPageLeadCandidate[] {
  //   const leadCandidates: PartyPageLeadCandidate[] = [];
  //   const totalElectoralCircles = ELECTORAL_CIRCLES.length;

  //   for (let i = 0; i < totalElectoralCircles; i++) {
  //     const electoralCircle = ELECTORAL_CIRCLES[i];
  //     const leadCandidate = candidates[electoralCircle].main[0];

  //     if (leadCandidate) {
  //       leadCandidates.push({
  //         shortName: leadCandidate.name,
  //         photoFileName: leadCandidate.photo,
  //         electoralDistrict: ELECTORAL_CIRCLES[i]
  //       });
  //     }
  //   }
  //   return leadCandidates;
  // }

  private getOnlinePlatforms(party: any): SocialPlatform[] {
    return [
      {
        id: 0,
        platform: 'SocialPlatformType.EMAIL',
        link: party.email
      },
      {
        id: 1,
        platform: 'SocialPlatformType.WEBSITE',
        link: party.website
      },
      {
        id: 2,
        platform: 'SocialPlatformType.FACEBOOK',
        link: party.facebook
      },
      {
        id: 3,
        platform: 'SocialPlatformType.INSTAGRAM',
        link: party.instagram
      },
      {
        id: 4,
        platform: 'SocialPlatformType.TWITTER',
        link: party.twitter
      }
    ]
  }

  // private convertElectoralCircle(electoralCircle: string) {
  //   return electoralCircleDropdown.filter(option => electoralCircle == option.value)[0].label;
  // }
}
