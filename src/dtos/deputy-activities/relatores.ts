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

export class Relator {

  @JsonProperty({ value: 'relatoresIniciativas' })
  @JsonManagedReference() @JsonClassType({ type: () => [RelatorInitiative] })
  initiative: RelatorInitiative | null;

  @JsonProperty({ value: 'relatoresPeticoes' })
  @JsonManagedReference() @JsonClassType({ type: () => [RelatorPetition] })
  petition: RelatorPetition | null;

  @JsonProperty({ value: 'relatoresIniEuropeias' })
  @JsonManagedReference() @JsonClassType({ type: () => [RelatorEuropeanInitiative] })
  europeanInitiative: RelatorEuropeanInitiative | null;

  @JsonProperty({ value: 'relatoresContasPublicas' })
  @JsonManagedReference() @JsonClassType({ type: () => [RelatorContasPublicas] })
  contasPublicas: RelatorContasPublicas | null;

  constructor(
    initiative: RelatorInitiative | null,
    petition: RelatorPetition | null,
    europeanInitiative: RelatorEuropeanInitiative | null,
    contasPublicas: RelatorContasPublicas | null
  ) {
    this.initiative = initiative;
    this.petition = petition;
    this.europeanInitiative = europeanInitiative;
    this.contasPublicas = contasPublicas;
  }
}

export class RelatorInitiative {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_RelatoresIniciativasOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [RelatorInitiativeDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  details: RelatorInitiativeDetails[]

  constructor(details: RelatorInitiativeDetails[]) {
    this.details = details;
  }
}

export class RelatorPetition {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_RelatoresPeticoesOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [RelatorPetitionDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  details: RelatorPetitionDetails[]

  constructor(details: RelatorPetitionDetails[]) {
    this.details = details;
  }
}

export class RelatorEuropeanInitiative {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_RelatoresIniEuropeiasOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [RelatorEuropeanInitiativeDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  details: RelatorEuropeanInitiativeDetails[]

  constructor(details: RelatorEuropeanInitiativeDetails[]) {
    this.details = details;
  }
}

export class RelatorContasPublicas {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_RelatoresContasPublicasOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [RelatorContasPublicasDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  details: RelatorContasPublicasDetails[]

  constructor(details: RelatorContasPublicasDetails[]) {
    this.details = details;
  }
}

@JsonIgnoreProperties({ value: ['legislature'] })
export class RelatorInitiativeDetails {

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
export class RelatorPetitionDetails {

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
export class RelatorEuropeanInitiativeDetails {

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

export class RelatorContasPublicasDetails {

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
