import { OnlinePlatform, OnlinePlatformType } from "../dtos/party-dto";

export const socialMediaOptions: OnlinePlatform[] = [
  {
    type: OnlinePlatformType.TWITTER,
    address: 'https://twitter.com/politicaparatds'
  },
  {
    type: OnlinePlatformType.FACEBOOK,
    address: 'http://fb.me/politicaparatodos.pt'
  },
  {
    type: OnlinePlatformType.MEDIUM,
    address: 'https://medium.com/politica-para-todos'
  },
  {
    type: OnlinePlatformType.EMAIL,
    address: 'contacto@politicaparatodos.pt'
  },
  {
    type: OnlinePlatformType.INSTAGRAM,
    address: 'https://www.instagram.com/politica_para_todos/'
  },
  {
    type: OnlinePlatformType.GITHUB,
    address: 'https://github.com/Politica-Para-Todos/'
  },
]
