import { Candidate } from "./candidate-dto"
import { Manifesto } from "./manifesto-dto"

export interface Party {
  id: string,
  name: string,
  acronym: string,
  description: string,
  descriptionSource: string,
  logo: string,
  platforms: OnlinePlatform[]
  manifesto: Manifesto,
  candidates: Candidate[]
}

export interface OnlinePlatform {
  platform: Plaftorm
  address: string
}

export enum Plaftorm {
  WEBSITE = 'website',
  EMAIL = 'email',
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  TWITTER = 'twitter',
  GITHUB = 'github',
  MEDIUM = 'medium'
}
