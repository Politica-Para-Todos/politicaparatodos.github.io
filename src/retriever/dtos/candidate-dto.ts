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
