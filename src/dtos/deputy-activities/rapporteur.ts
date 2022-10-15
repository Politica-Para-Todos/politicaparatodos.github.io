import {
  JsonClassType,
  JsonDeserialize,
  JsonFormat,
  JsonFormatShape,
  JsonIgnoreProperties,
  JsonManagedReference,
  JsonProperty
} from "jackson-js";
import { buildArray } from "../../utils/parlamento-api";

export class Rapporteur {

  @JsonProperty({ value: 'relatoresIniciativas' })
  @JsonManagedReference() @JsonClassType({ type: () => [InitiativeRapporteur] })
  initiative: InitiativeRapporteur | null;

  @JsonProperty({ value: 'relatoresPeticoes' })
  @JsonManagedReference() @JsonClassType({ type: () => [PetitionRapporteur] })
  petition: PetitionRapporteur | null;

  @JsonProperty({ value: 'relatoresIniEuropeias' })
  @JsonManagedReference() @JsonClassType({ type: () => [EuropeanInitiativeRapporteur] })
  europeanInitiative: EuropeanInitiativeRapporteur | null;

  @JsonProperty({ value: 'relatoresContasPublicas' })
  @JsonManagedReference() @JsonClassType({ type: () => [PublicFundsRapporteur] })
  contasPublicas: PublicFundsRapporteur | null;

  constructor(
    initiative: InitiativeRapporteur | null,
    petition: PetitionRapporteur | null,
    europeanInitiative: EuropeanInitiativeRapporteur | null,
    contasPublicas: PublicFundsRapporteur | null
  ) {
    this.initiative = initiative;
    this.petition = petition;
    this.europeanInitiative = europeanInitiative;
    this.contasPublicas = contasPublicas;
  }
}

export class InitiativeRapporteur {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_RelatoresIniciativasOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [InitiativeRapporteurDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  details: InitiativeRapporteurDetails[]

  constructor(details: InitiativeRapporteurDetails[]) {
    this.details = details;
  }
}

export class PetitionRapporteur {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_RelatoresPeticoesOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [PetitionRapporteurDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  details: PetitionRapporteurDetails[]

  constructor(details: PetitionRapporteurDetails[]) {
    this.details = details;
  }
}

export class EuropeanInitiativeRapporteur {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_RelatoresIniEuropeiasOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [EuropeanInitiativeRapporteurDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  details: EuropeanInitiativeRapporteurDetails[]

  constructor(details: EuropeanInitiativeRapporteurDetails[]) {
    this.details = details;
  }
}

export class PublicFundsRapporteur {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_RelatoresContasPublicasOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [PublicFundsRapporteurDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  details: PublicFundsRapporteurDetails[]

  constructor(details: PublicFundsRapporteurDetails[]) {
    this.details = details;
  }
}

@JsonIgnoreProperties({ value: ['legislature'] })
export class InitiativeRapporteurDetails {

  @JsonProperty({ value: 'iniTi' })
  title: string;

  @JsonProperty({ value: 'iniId' })
  id: number;

  @JsonProperty({ value: 'iniNr' })
  number: number;

  @JsonProperty({ value: 'iniTp' })
  type: string;

  @JsonProperty({ value: 'iniSelLg' })
  legislature: string

  @JsonProperty({ value: 'relFase' })
  relFase: string;

  @JsonProperty({ value: 'accDtrel' })
  date: string | null;

  constructor(
    title: string,
    id: number,
    number: number,
    type: string,
    legislature: string,
    relFase: string,
    date: string
  ) {
    this.title = title;
    this.id = id;
    this.number = number;
    this.type = type;
    this.legislature = legislature;
    this.relFase = relFase;
    this.date = date;
  }
}

@JsonIgnoreProperties({ value: ['legislature'] })
export class PetitionRapporteurDetails {

  @JsonProperty({ value: 'petId' })
  id: number;

  @JsonProperty({ value: 'petNr' })
  number: number;

  @JsonProperty({ value: 'petSelLgPk' })
  legislature: string;

  @JsonProperty({ value: 'petSelNrPk' })
  petSelNrPk: number;

  @JsonProperty({ value: 'petAspet' })
  petAspet: string;

  @JsonProperty({ value: 'pecDtrelf' })
  date: string;

  constructor(
    id: number,
    number: number,
    legislature: string,
    petSelNrPk: number,
    petAspet: string,
    date: string
  ) {
    this.id = id;
    this.number = number;
    this.legislature = legislature;
    this.petSelNrPk = petSelNrPk;
    this.petAspet = petAspet;
    this.date = date;
  }
}

@JsonIgnoreProperties({ value: ['legislature'] })
export class EuropeanInitiativeRapporteurDetails {

  @JsonProperty({ value: 'ineId' })
  id: number;

  @JsonProperty({ value: 'ineReferencia' })
  reference: string;

  @JsonProperty({ value: 'ineTitulo' })
  title: string;

  @JsonProperty({ value: 'ineDataRelatorio' })
  reportDate: string;

  @JsonProperty({ value: 'leg' })
  legislature: string;

  constructor(
    id: number,
    reference: string,
    title: string,
    reportDate: string,
    legislature: string
  ) {
    this.id = id;
    this.reference = reference;
    this.title = title;
    this.reportDate = reportDate;
    this.legislature = legislature;
  }
}

export class PublicFundsRapporteurDetails {

  @JsonProperty({ value: 'actAs' })
  subject: string;

  @JsonProperty({ value: 'actTp' })
  type: string;

  @JsonProperty({ value: 'actId' })
  id: number;

  constructor(
    subject: string,
    type: string,
    id: number,
  ) {
    this.subject = subject;
    this.type = type;
    this.id = id;
  }
}
