import { ElectoralCircle } from "../dtos/electoral-circle-dto";
import { Plaftorm } from "../dtos/party-dto";

const mockedParties = {
  data: {
    getAllParties: [
      {
        id: 'party-id-1',
        name: 'Livre',
        acronym: 'L',
        website: 'www.livre.pt',
        logo: 'livre-logo.png'
      },
      {
        id: 'party-id-2',
        name: 'Chega',
        acronym: 'CH',
        website: 'www.chega.pt',
        logo: 'chega.png'
      }
    ]
  }
}

const mockedParty = {
  data: {
    getParty: {
      id: 'party-id-1',
      name: 'LIVRE',
      acronym: 'L',
      website: 'https://partidolivre.pt',
      email: 'info@partidolivre.pt',
      logo: 'livre-logo.png',
      description: 'O Livre (L) é um partido pol\u00edtico portugu\u00eas. \nOs seus princ\u00edpios fundadores s\u00e3o liberdade, igualdade, solidariedade, socialismo, ecologia e europe\u00edsmo.\nO seu s\u00edmbolo \u00e9 a papoila. Foi legalizado, com a designa\u00e7\u00e3o LIVRE e sigla L, pelo Tribunal Constitucional a 19 de mar\u00e7o de 2014.',
      descriptionSource: 'https://pt.wikipedia.org/wiki/LIVRE_(partido_pol%C3%ADtico)',
      electoralCircles: [ElectoralCircle.ALL, ElectoralCircle.BEJA, ElectoralCircle.LISBOA],
      candidates: [
        {
          id: 'candidate-id-1',
          name: 'Carlos do Carmo',
          electoralCircle: ElectoralCircle.BEJA,
          photo: 'pic.jpg',
          isLeadCandidate: true,
          type: '??',
          position: 1,
          biography: 'Nasci por aqui e ando mais por ali.',
          biographySource: 'https://abola.pt',
          parliamentLink: 'parliament-link',
          photoSource: '',
        },
        {
          id: 'candidate-id-2',
          name: 'Raquel Gomes',
          electoralCircle: ElectoralCircle.LISBOA,
          photo: 'pic.jpg',
          isLeadCandidate: false,
          type: '??',
          position: 3,
          biography: 'Nasci por aqui e ando mais por ali.',
          biographySource: 'https://abola.pt',
          parliamentLink: 'parliament-link',
          photoSource: '',
        }
      ],
      platforms: [
        {
          platform: Plaftorm.WEBSITE,
          address: 'https://partidolivre.pt'
        },
        {
          platform: Plaftorm.EMAIL,
          address: 'info@partidolivre.pt'
        },
        {
          platform: Plaftorm.FACEBOOK,
          address: 'https://www.facebook.com/LIVREoficialpt'
        },
        {
          platform: Plaftorm.TWITTER,
          address: 'https://twitter.com/LIVREpt'
        },
        {
          platform: Plaftorm.INSTAGRAM,
          address: 'https://www.instagram.com/partidolivre/'
        }
      ],
      manifesto: {
        title: 'Concretizar o Futuro',
        source: 'https://partidolivre.pt/wp-content/uploads/2021/12/Programa_Eleitoral_2022.pdf',
        sections: [
          {
            position: 1,
            content: 'Random text 1'
          },
          {
            position: 2,
            content: 'Random text 2'
          }
        ]
      }
    }
  }
}

const mockedCandidates = {
  data: {
    getElectoralCirclePartyCandidates: {
      id: 'party-id-1',
      name: 'LIVRE',
      acronym: 'L',
      manifesto: {
        title: 'Concretizar o Futuro',
        source: 'https://partidolivre.pt/wp-content/uploads/2021/12/Programa_Eleitoral_2022.pdf',
        sections: [
          {
            position: 1,
            content: 'Random text 1'
          },
          {
            position: 2,
            content: 'Random text 2'
          }
        ]
      },
      candidates: [
        {
          id: 'candidate-id-1',
          name: 'Carlos do Carmo',
          electoralCircle: ElectoralCircle.LISBOA,
          photo: 'pic.jpg',
          isLeadCandidate: true,
          biography: 'Como muitos de vós — na prática, todos nós — estou aqui graças ao 25 de Abril. Não só porque esse é o dia fundador do nosso regime democrático, que em breve terá mais dias do que teve a ditadura. Mas também porque a partir daí se formou, ainda que com lacunas e dificuldades, o estado social que me permitiu de inúmeras formas ser quem sou, beneficiar do SNS e da escola pública, estudar com bolsas dentro e fora do país — tudo coisas inconcebíveis para a geração dos meus pais, vinda de uma aldeia no Ribatejo para a capital no pós-guerra. Este é o momento de devolver o que devemos à democracia e ao estado social. Quem quer que o país mude, tem de se apresentar. E eu — historiador, 49 anos, atualmente vereador sem pelouro pelo LIVRE na Câmara Municipal de Lisboa — quero que o país mude.',
          biographySource: 'https://wikipedia.org',
          position: 'Cabeça de lista'
        },
        {
          id: 'candidate-id-2',
          name: 'Raquel Gomes',
          electoralCircle: ElectoralCircle.LISBOA,
          photo: 'pic.jpg',
          isLeadCandidate: false,
        }
      ],
      platforms: [
        {
          platform: Plaftorm.WEBSITE,
          address: 'https://partidolivre.pt'
        },
        {
          platform: Plaftorm.EMAIL,
          address: 'info@partidolivre.pt'
        },
        {
          platform: Plaftorm.FACEBOOK,
          address: 'https://www.facebook.com/LIVREoficialpt'
        },
        {
          platform: Plaftorm.TWITTER,
          address: 'https://twitter.com/LIVREpt'
        },
        {
          platform: Plaftorm.INSTAGRAM,
          address: 'https://www.instagram.com/partidolivre/'
        }
      ]
    }
  }
}

export const resolvers = {
  Query: {
    getAllParties: () => mockedParties,
    getParty: () => mockedParty,
    getElectoralCirclePartyCandidates: () => mockedCandidates
  }
};
