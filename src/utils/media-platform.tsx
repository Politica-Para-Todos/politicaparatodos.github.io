import { OnlinePlatform } from "../dtos/party-dto";

export interface MediaPlatformOption {
  type: MediaPlatformEnum;
  url: string;
}

export enum MediaPlatformEnum {
  TWITTER = 'Twitter',
  FACEBOOK = 'Facebook',
  EMAIL = 'Email',
  INSTAGRAM = 'Instagram',
  MEDIUM = 'Medium',
  GITHUB = 'Github'
}

export const socialMediaOptions: OnlinePlatform[] = [
  {
    name: MediaPlatformEnum.TWITTER,
    url: 'https://twitter.com/politicaparatds'
  },
  {
    name: MediaPlatformEnum.FACEBOOK,
    url: 'http://fb.me/politicaparatodos.pt'
  },
  {
    name: MediaPlatformEnum.MEDIUM,
    url: 'https://medium.com/politica-para-todos'
  },
  {
    name: MediaPlatformEnum.EMAIL,
    url: 'contacto@politicaparatodos.pt'
  },
  {
    name: MediaPlatformEnum.INSTAGRAM,
    url: 'https://www.instagram.com/politica_para_todos/'
  },
  {
    name: MediaPlatformEnum.GITHUB,
    url: 'https://github.com/Politica-Para-Todos/'
  },
]
