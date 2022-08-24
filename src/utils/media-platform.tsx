export interface MediaPlatformOption {
  type: MediaPlatform;
  url: string;
}

export enum MediaPlatform {
  TWITTER,
  FACEBOOK,
  MEDIUM,
  EMAIL,
  INSTAGRAM,
  GITHUB
}

export const socialMediaOptions: MediaPlatformOption[] = [
  {
    type: MediaPlatform.TWITTER,
    url: 'https://twitter.com/politicaparatds'
  },
  {
    type: MediaPlatform.FACEBOOK,
    url: 'http://fb.me/politicaparatodos.pt'
  },
  {
    type: MediaPlatform.MEDIUM,
    url: 'https://medium.com/politica-para-todos'
  },
  {
    type: MediaPlatform.EMAIL,
    url: 'contacto@politicaparatodos.pt'
  },
  {
    type: MediaPlatform.INSTAGRAM,
    url: 'https://www.instagram.com/politica_para_todos/'
  },
  {
    type: MediaPlatform.GITHUB,
    url: 'https://github.com/Politica-Para-Todos/'
  },
]
