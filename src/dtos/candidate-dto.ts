import { ElectoralCircle } from "./electoral-circle-dto"
import { Party } from "./party-dto"

export interface Candidate {
  id: string,
  name: string,
  electoralCircle: ElectoralCircle
  photo: string
  isLeadCandidate: boolean
  type: string
  position: number
  biography: string
  biographySource: string
  parliamentLink: string
  photoSource: string
}
