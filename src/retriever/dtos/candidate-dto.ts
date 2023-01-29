// export interface Candidate {
//   name: string;
//   electoralCircle: null;
//   photo: string | null;
//   isLeadCandidate: boolean;
//   type: string;
//   position: number;
//   biography: string | null;
//   biographySource: string | null;
//   parliamentLink: string | null;
//   photoSource: string | null;
// }

export interface CandidatePage {
  electoralCircle: string,
  lead: {
    name: string,
    profilePhotoFileName: string,
    biography: string,
    biographySource: string,
    parliamentLink: string
  },
  main: CandidateType[] | null,
  secondary: CandidateType[] | null
}

export interface CandidateType {
  name: string,
  position: number
}
