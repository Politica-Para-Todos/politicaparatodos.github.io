import { JsonClassType, JsonDeserialize, JsonFormat, JsonFormatShape, JsonIgnore, JsonIgnoreProperties, JsonManagedReference, JsonProperty } from "jackson-js";
import { buildArray } from "../utils/parlamento-api";

@JsonIgnoreProperties({ value: ['xmlSchema', 'xmlSchemaInstance'] })
export class Legislature {

  @JsonProperty({ value: '@xmlns:xsd' })
  xmlSchema: string;

  @JsonProperty({ value: '@xmlns:xsi' })
  xmlSchemaInstance: string;

  @JsonProperty({ value: 'SessoesLegislativas' })
  @JsonManagedReference() @JsonClassType({ type: () => [LegislativeSession] })
  legislativeSession: LegislativeSession;

  @JsonProperty({ value: 'GruposParlamentares' })
  @JsonManagedReference() @JsonClassType({ type: () => [ParlamentaryGroup] })
  parlamentaryGroup: ParlamentaryGroup;

  @JsonProperty({ value: 'CirculosEleitorais' })
  @JsonManagedReference() @JsonClassType({ type: () => [ElectoralCircle] })
  electoralCircle: ElectoralCircle;

  @JsonProperty({ value: 'Deputados' })
  @JsonManagedReference() @JsonClassType({ type: () => [Deputy] })
  deputy: Deputy;

  @JsonProperty({ value: 'DetalheLegislatura' })
  @JsonManagedReference() @JsonClassType({ type: () => [LegislatureDetails] })
  legislatureDetails: LegislatureDetails;

  constructor(
    xmlSchema: string,
    xmlSchemaInstance: string,
    legislativeSessions: LegislativeSession,
    parlamentaryGroups: ParlamentaryGroup,
    electoralCircles: ElectoralCircle,
    legislatureDeputy: Deputy,
    legislatureDetails: LegislatureDetails
  ) {
    this.xmlSchema = xmlSchema;
    this.xmlSchemaInstance = xmlSchemaInstance;
    this.legislativeSession = legislativeSessions;
    this.parlamentaryGroup = parlamentaryGroups;
    this.electoralCircle = electoralCircles;
    this.deputy = legislatureDeputy;
    this.legislatureDetails = legislatureDetails;
  }
}

export class LegislativeSession {

  @JsonProperty({ value: 'pt_gov_ar_objectos_SessaoLegislativaOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Session] })
  session: Session;

  constructor(session: Session) {
    this.session = session;
  }
}

export class Session {

  @JsonProperty({ value: 'numSessao' })
  sessionNumber: string;

  @JsonProperty({ value: 'dataInicio' })
  startDate: string;

  constructor(sessionNumber: string, startDate: string) {
    this.sessionNumber = sessionNumber;
    this.startDate = startDate
  }
}

export class ParlamentaryGroup {

  @JsonProperty({ value: 'pt_gov_ar_objectos_GPOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [ParlamentaryGroupDetails]] })
  details: ParlamentaryGroupDetails[];

  constructor(details: ParlamentaryGroupDetails[]) {
    this.details = details
  }
}

export class ParlamentaryGroupDetails {

  @JsonProperty({ value: 'sigla' })
  acronym: string;

  @JsonProperty({ value: 'nome' })
  name: string;

  constructor(acronym: string, name: string) {
    this.acronym = acronym;
    this.name = name;
  }
}

export class ElectoralCircle {

  @JsonProperty({ value: 'pt_ar_wsgode_objectos_DadosCirculoEleitoralList' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [ElectoralCircleDetails]] })
  details: ElectoralCircleDetails[];

  constructor(details: ElectoralCircleDetails[]) {
    this.details = details;
  }
}

export class ElectoralCircleDetails {

  @JsonProperty({ value: 'cpId' })
  id: number;

  @JsonProperty({ value: 'cpDes' })
  description: string;

  @JsonProperty({ value: 'legDes' })
  legislatureAcronym: string;

  constructor(id: number, description: string, legislatureAcronym: string) {
    this.id = id;
    this.description = description;
    this.legislatureAcronym = legislatureAcronym;
  }
}

export class Deputy {

  @JsonProperty({ value: 'pt_ar_wsgode_objectos_DadosDeputadoSearch' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [DeputyDetails]] })
  details: DeputyDetails[];

  constructor(details: DeputyDetails[]) {
    this.details = details;
  }
}

export class DeputyDetails {

  @JsonProperty({ value: 'depId' })
  id: number;

  @JsonProperty({ value: 'depCadId' })
  chairId: number;

  @JsonProperty({ value: 'depNomeParlamentar' })
  name: string;

  @JsonProperty({ value: 'depGP' })
  @JsonManagedReference() @JsonClassType({ type: () => [DeputyParlamentaryGroup] })
  parlamentaryGroup: DeputyParlamentaryGroup;

  @JsonProperty({ value: 'depCPId' })
  electoralCircleId: number;

  @JsonProperty({ value: 'depCPDes' })
  electoralCircleDescription: string;

  @JsonProperty({ value: 'legDes' })
  legislatureAcronym: string;

  @JsonProperty({ value: 'depCargo' })
  @JsonManagedReference() @JsonClassType({ type: () => [DeputyPosition] })
  position: DeputyPosition | null;

  @JsonProperty({ value: 'depSituacao' })
  @JsonManagedReference() @JsonClassType({ type: () => [DeputySituation] })
  situation: DeputySituation;

  @JsonProperty({ value: 'depNomeCompleto' })
  fullName: string;

  constructor(
    id: number,
    chairId: number,
    name: string,
    parlamentaryGroup: DeputyParlamentaryGroup,
    electoralCircleId: number,
    electoralCircleDescription: string,
    legislatureAcronym: string,
    position: DeputyPosition | null,
    situation: DeputySituation,
    fullName: string
  ) {
    this.id = id;
    this.chairId = chairId;
    this.name = name;
    this.parlamentaryGroup = parlamentaryGroup;
    this.electoralCircleId = electoralCircleId;
    this.electoralCircleDescription = electoralCircleDescription;
    this.legislatureAcronym = legislatureAcronym;
    this.position = position;
    this.situation = situation;
    this.fullName = fullName;
  }
}

export class DeputyParlamentaryGroup {

  @JsonProperty({ value: 'pt_ar_wsgode_objectos_DadosSituacaoGP' })
  @JsonManagedReference() @JsonClassType({ type: () => [DeputyParlamentaryGroupDetails] })
  details: DeputyParlamentaryGroupDetails;

  constructor(details: DeputyParlamentaryGroupDetails) {
    this.details = details;
  }
}

export class DeputyParlamentaryGroupDetails {

  @JsonProperty({ value: 'gpId' })
  id: number;

  @JsonProperty({ value: 'gpSigla' })
  acronym: string;

  @JsonProperty({ value: 'gpDtInicio' })
  startDate: string;

  @JsonProperty({ value: 'gpDtFim' })
  endDate: string;

  constructor(id: number, acronym: string, startDate: string, endDate: string) {
    this.id = id;
    this.acronym = acronym;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

export class DeputyPosition {

  @JsonProperty({ value: 'pt_ar_wsgode_objectos_DadosCargoDeputado' })
  @JsonManagedReference() @JsonClassType({ type: () => [DeputyPositionDetails] })
  details: DeputyPositionDetails;

  constructor(details: DeputyPositionDetails) {
    this.details = details;
  }
}

export class DeputyPositionDetails {

  @JsonProperty({ value: 'carId' })
  id: number;

  @JsonProperty({ value: 'carDes' })
  description: string;

  @JsonProperty({ value: 'carDtInicio' })
  startDate: string;

  constructor(id: number, description: string, startDate: string) {
    this.id = id;
    this.description = description;
    this.startDate = startDate;
  }
}

export class DeputySituation {

  @JsonProperty({ value: 'pt_ar_wsgode_objectos_DadosSituacaoDeputado' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [DeputySituationDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  deputySituationDetails: DeputySituationDetails[];

  constructor(deputySituationDetails: DeputySituationDetails[]) {
    this.deputySituationDetails = deputySituationDetails;
  }
}

export class DeputySituationDetails {

  @JsonProperty({ value: 'sioDes' })
  description: string;

  @JsonProperty({ value: 'sioDtInicio' })
  startDate: string;

  @JsonProperty({ value: 'sioDtFim' })
  endDate: string | null

  constructor(description: string, starDate: string, endDate: string | null) {
    this.description = description;
    this.startDate = starDate;
    this.endDate = endDate;
  }
}

export class LegislatureDetails {

  @JsonProperty({ value: 'sigla' })
  acronym: string;

  @JsonProperty({ value: 'dtini' })
  startDate: string;

  @JsonProperty({ value: 'siglaAntiga' })
  previousAcronym: string;

  @JsonProperty({ value: 'id' })
  id: number;

  constructor(
    acronym: string,
    startDate: string,
    previousAcronym: string,
    id: number
  ) {
    this.acronym = acronym;
    this.startDate = startDate;
    this.previousAcronym = previousAcronym;
    this.id = id;
  }

}
