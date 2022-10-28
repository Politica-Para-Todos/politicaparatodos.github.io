export enum ElectoralCircle {
  ALL = 'all',
  ACORES = 'acores',
  AVEIRO = 'aveiro',
  BEJA = 'beja',
  BRAGA = 'braga',
  BRAGANCA = 'braganca',
  CASTELO_BRANCO = 'castelo-branco',
  COIMBRA = 'coimbra',
  EVORA = 'evora',
  EUROPA = 'europa',
  FARO = 'faro',
  FORA_EUROPA = 'fora-europa',
  GUARDA = 'guarda',
  LEIRIA = 'leiria',
  LISBOA = 'lisboa',
  MADEIRA = 'madeira',
  PORTALEGRE = 'portalegre',
  PORTO = 'porto',
  SANTAREM = 'santarem',
  SETUBAL = 'setubal',
  VIANA_DO_CASTELO = 'viana-do-castelo',
  VILA_REAL = 'vila-real',
  VISEU = 'viseu'
}

export const electoralCircleDropdown = () => [
  {
    value: ElectoralCircle.ALL,
    label: 'Todos'
  },
  {
    value: ElectoralCircle.ACORES,
    label: 'Açores'
  },
  {
    value: ElectoralCircle.AVEIRO,
    label: 'Aveiro'
  },
  {
    value: ElectoralCircle.BEJA,
    label: 'Beja'
  },
  {
    value: ElectoralCircle.BRAGA,
    label: 'Braga'
  },
  {
    value: ElectoralCircle.BRAGANCA,
    label: 'Bragança'
  },
  {
    value: ElectoralCircle.CASTELO_BRANCO,
    label: 'Castelo Branco'
  },
  {
    value: ElectoralCircle.COIMBRA,
    label: 'Coimbra'
  },
  {
    value: ElectoralCircle.EVORA,
    label: 'Évora'
  },
  {
    value: ElectoralCircle.EUROPA,
    label: 'Europa'
  },
  {
    value: ElectoralCircle.FARO,
    label: 'Faro'
  },
  {
    value: ElectoralCircle.FORA_EUROPA,
    label: 'Fora da Europa'
  },
  {
    value: ElectoralCircle.GUARDA,
    label: 'Guarda'
  },
  {
    value: ElectoralCircle.LEIRIA,
    label: 'Leiria'
  },
  {
    value: ElectoralCircle.LISBOA,
    label: 'Lisboa'
  },
  {
    value: ElectoralCircle.MADEIRA,
    label: 'Madeira'
  },
  {
    value: ElectoralCircle.PORTALEGRE,
    label: 'Portalegre'
  },
  {
    value: ElectoralCircle.PORTO,
    label: 'Porto'
  },
  {
    value: ElectoralCircle.SANTAREM,
    label: 'Santarém'
  },
  {
    value: ElectoralCircle.SETUBAL,
    label: 'Setúbal'
  },
  {
    value: ElectoralCircle.VIANA_DO_CASTELO,
    label: 'Viana do Castelo'
  },
  {
    value: ElectoralCircle.VILA_REAL,
    label: 'Vila Real'
  },
  {
    value: ElectoralCircle.VISEU,
    label: 'Viseu'
  }
];

export const convertToLabel = (circle: string) =>
  electoralCircleDropdown()
    .filter((element: any) => element.value == circle)[0].label;
