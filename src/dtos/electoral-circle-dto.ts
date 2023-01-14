import { ElectoralCircle } from "../utils/constants";

export enum ElectoralCircleDropdownValue {
  ALL = "all",
  ACORES = "acores",
  AVEIRO = "aveiro",
  BEJA = "beja",
  BRAGA = "braga",
  BRAGANCA = "braganca",
  CASTELO_BRANCO = "castelo-branco",
  COIMBRA = "coimbra",
  EVORA = "evora",
  EUROPA = "europa",
  FARO = "faro",
  FORA_EUROPA = "fora-europa",
  GUARDA = "guarda",
  LEIRIA = "leiria",
  LISBOA = "lisboa",
  MADEIRA = "madeira",
  PORTALEGRE = "portalegre",
  PORTO = "porto",
  SANTAREM = "santarem",
  SETUBAL = "setubal",
  VIANA_DO_CASTELO = "viana-do-castelo",
  VILA_REAL = "vila-real",
  VISEU = "viseu",
}

interface DropDownValueLabel {
  value: ElectoralCircleDropdownValue,
  label: string
}

export const electoralCircleDropdown: DropDownValueLabel[] = [
  {
    value: ElectoralCircleDropdownValue.ALL,
    label: "Todos",
  },
  {
    value: ElectoralCircleDropdownValue.ACORES,
    label: ElectoralCircle.ACORES,
  },
  {
    value: ElectoralCircleDropdownValue.AVEIRO,
    label: ElectoralCircle.AVEIRO,
  },
  {
    value: ElectoralCircleDropdownValue.BEJA,
    label: ElectoralCircle.BEJA,
  },
  {
    value: ElectoralCircleDropdownValue.BRAGA,
    label: ElectoralCircle.BRAGA,
  },
  {
    value: ElectoralCircleDropdownValue.BRAGANCA,
    label: ElectoralCircle.BRAGANCA,
  },
  {
    value: ElectoralCircleDropdownValue.CASTELO_BRANCO,
    label: ElectoralCircle.CASTELO_BRANCO,
  },
  {
    value: ElectoralCircleDropdownValue.COIMBRA,
    label: ElectoralCircle.COIMBRA,
  },
  {
    value: ElectoralCircleDropdownValue.EVORA,
    label: ElectoralCircle.EVORA,
  },
  {
    value: ElectoralCircleDropdownValue.EUROPA,
    label: ElectoralCircle.EUROPA,
  },
  {
    value: ElectoralCircleDropdownValue.FARO,
    label: ElectoralCircle.FARO,
  },
  {
    value: ElectoralCircleDropdownValue.FORA_EUROPA,
    label: ElectoralCircle.FORA_DA_EUROPA,
  },
  {
    value: ElectoralCircleDropdownValue.GUARDA,
    label: ElectoralCircle.GUARDA,
  },
  {
    value: ElectoralCircleDropdownValue.LEIRIA,
    label: ElectoralCircle.LEIRIA,
  },
  {
    value: ElectoralCircleDropdownValue.LISBOA,
    label: ElectoralCircle.LISBOA,
  },
  {
    value: ElectoralCircleDropdownValue.MADEIRA,
    label: ElectoralCircle.MADEIRA,
  },
  {
    value: ElectoralCircleDropdownValue.PORTALEGRE,
    label: ElectoralCircle.PORTALEGRE,
  },
  {
    value: ElectoralCircleDropdownValue.PORTO,
    label: ElectoralCircle.PORTO,
  },
  {
    value: ElectoralCircleDropdownValue.SANTAREM,
    label: ElectoralCircle.SANATREM,
  },
  {
    value: ElectoralCircleDropdownValue.SETUBAL,
    label: ElectoralCircle.SETUBAL,
  },
  {
    value: ElectoralCircleDropdownValue.VIANA_DO_CASTELO,
    label: ElectoralCircle.VIANA_DO_CASTELO,
  },
  {
    value: ElectoralCircleDropdownValue.VILA_REAL,
    label: ElectoralCircle.VILA_REAL,
  },
  {
    value: ElectoralCircleDropdownValue.VISEU,
    label: ElectoralCircle.VISEU,
  },
];

export const convertToLabel = (electoralCircle: ElectoralCircleDropdownValue) =>
  electoralCircleDropdown.filter(element => element.value == electoralCircle)[0].label;
