import { ElectoralCircle } from "./electoral-circle-dto";

export interface Candidate {
  name: string;
  electoralCircle: ElectoralCircle;
  photo: string | null;
  isLeadCandidate: boolean;
  type: string;
  position: number;
  biography: string | null;
  biographySource: string | null;
  parliamentLink: string | null;
  photoSource: string | null;
}
