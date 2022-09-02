import { JsonClassType, JsonIgnore, JsonIgnoreProperties, JsonManagedReference, JsonProperty } from "jackson-js";
import { DeputyDetails } from "./base-info";

@JsonIgnoreProperties({ value: ['xmlSchema', 'xmlSchemaInstance'] })
export class DeputyActivities {

  @JsonProperty({ value: '@xmlns:xsd' })
  xmlSchema: string;

  @JsonProperty({ value: '@xmlns:xsi' })
  xmlSchemaInstance: string;

  @JsonProperty({ value: 'AtividadeDeputado' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [DeputyActivity]] })
  activities: DeputyActivity[];

  constructor(xmlSchema: string, xmlSchemaInstance: string, activities: DeputyActivity[]) {
    this.xmlSchema = xmlSchema;
    this.xmlSchemaInstance = xmlSchemaInstance;
    this.activities = activities;
  }
}

export class DeputyActivity {

  @JsonProperty({ value: 'AtividadeDeputadoList' })
  @JsonManagedReference() @JsonClassType({ type: () => [DeputyActivityDetails] })
  deputyActivity: DeputyActivityDetails;

  @JsonProperty({ value: 'deputado' })
  @JsonManagedReference() @JsonClassType({ type: () => [DeputyDetails] })
  deputy: DeputyDetails

  constructor(deputyActivity: DeputyActivityDetails, deputy: DeputyDetails) {
    this.deputyActivity = deputyActivity;
    this.deputy = deputy;
  }
}

export class DeputyActivityDetails {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_ActividadeOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [DeputyActivityStructure] })
  activityStructure: DeputyActivityStructure

  constructor(activityStructure: DeputyActivityStructure) {
    this.activityStructure = activityStructure;
  }
}

@JsonIgnoreProperties({ value: ['dadosLegisDeputado'] })
export class DeputyActivityStructure {

  @JsonProperty({ value: 'ini' })
  @JsonManagedReference() @JsonClassType({ type: () => [InitiativeActivity] })
  initiative: InitiativeActivity;

  @JsonProperty({ value: 'req' })
  @JsonManagedReference() @JsonClassType({ type: () => [RequerimentosActivity] })
  requerimentos: RequerimentosActivity;

  @JsonProperty({ value: 'intev' })
  @JsonManagedReference() @JsonClassType({ type: () => [InterventionsActivity] })
  interventions: InterventionsActivity;

  @JsonProperty({ value: 'actP' })
  @JsonManagedReference() @JsonClassType({ type: () => [ParlamentaryActivity] })
  parlamentaryActivities: ParlamentaryActivity;

  @JsonProperty({ value: 'dlP' })
  @JsonManagedReference() @JsonClassType({ type: () => [PermanentDelagation] })
  permanentDelegations: PermanentDelagation;

  @JsonProperty({ value: 'rel' })
  @JsonIgnore()
  rel: null;

  @JsonProperty({ value: 'cms' })
  @JsonManagedReference() @JsonClassType({ type: () => [Comissions] })
  comissions: Comissions;

  @JsonProperty({ value: 'dadosLegisDeputado' })
  deputyData: any;

  @JsonProperty({ value: 'audiencias' })
  @JsonManagedReference() @JsonClassType({ type: () => [Audience] })
  audiences: Audience;

  @JsonProperty({ value: 'audicoes' })
  @JsonManagedReference() @JsonClassType({ type: () => [Audition] })
  auditions: Audition;

  constructor(
    initiative: InitiativeActivity,
    requerimentos: RequerimentosActivity,
    interventions: InterventionsActivity,
    parlamentaryActivities: ParlamentaryActivity,
    PermanentDelagations: PermanentDelagation,
    rel: null,
    comissions: Comissions,
    deputyData: any,
    audiences: Audience,
    auditions: Audition
  ) {
    this.initiative = initiative;
    this.requerimentos = requerimentos;
    this.interventions = interventions;
    this.parlamentaryActivities = parlamentaryActivities;
    this.permanentDelegations = PermanentDelagations;
    this.rel = rel;
    this.comissions = comissions;
    this.deputyData = deputyData;
    this.audiences = audiences;
    this.auditions = auditions;
  }
}

export class InitiativeActivity {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_IniciativasOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [InitiativeDetails]] })
  initiativeDetails: InitiativeDetails[];

  constructor(initiativeDetails: InitiativeDetails[]) {
    this.initiativeDetails = initiativeDetails;
  }
}

export class RequerimentosActivity {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_RequerimentosOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [RequerimentoDetails]] })
  requerimentoDetails: RequerimentoDetails[];

  constructor(requerimentoDetails: RequerimentoDetails[]) {
    this.requerimentoDetails = requerimentoDetails;
  }
}

export class InterventionsActivity {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_IntervencoesOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [InterventionDetails]] })
  interventionDetails: InterventionDetails[];

  constructor(interventionDetails: InterventionDetails[]) {
    this.interventionDetails = interventionDetails;
  }
}

export class ParlamentaryActivity {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_ActividadesParlamentaresOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [ParlamentaryDetails]] })
  parlamentaryDetails: ParlamentaryDetails[];

  constructor(parlamentaryDetails: ParlamentaryDetails[]) {
    this.parlamentaryDetails = parlamentaryDetails;
  }
}

export class PermanentDelagation {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_DelegacoesPermanentesOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [PermanentDelegationDetails] })
  permanentDelegationDetails: PermanentDelegationDetails;

  constructor(permanentDelegationDetails: PermanentDelegationDetails) {
    this.permanentDelegationDetails = permanentDelegationDetails;
  }

}
export class Comissions {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_ComissoesOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [ComissionDetails]] })
  comissionDetails: ComissionDetails[];

  constructor(comissionDetails: ComissionDetails[]) {
    this.comissionDetails = comissionDetails;
  }

}

//deputyData

class AudienceAudition {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_ActividadesComissaoOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [AudienceAuditionDetails] })
  details: AudienceAuditionDetails | AudienceAuditionDetails[];

  constructor(details: AudienceAuditionDetails | AudienceAuditionDetails[]) {
    this.details = details;
  }
}

class AudienceAuditionDetails {

  @JsonProperty({ value: 'actId' })
  id: number;

  @JsonProperty({ value: 'actAs' })
  subject: string;

  @JsonProperty({ value: 'accDtaud' })
  accDtaud: string;

  @JsonProperty({ value: 'nomeEntidadeExterna' })
  externalEntityName: string;

  @JsonProperty({ value: 'actTpdesc' })
  actTpdesc: string;

  @JsonProperty({ value: 'actNr' })
  actNr: string;

  @JsonProperty({ value: 'actLg' })
  legislature: string;

  @JsonProperty({ value: 'cmsNo' })
  cmsNo: string;

  @JsonProperty({ value: 'cmsAb' })
  cmsAb: string;

  constructor(
    id: number,
    subject: string,
    accDtaud: string,
    externalEntityName: string,
    actTpdesc: string,
    actNr: string,
    legislature: string,
    cmsNo: string,
    cmsAb: string,
  ) {
    this.id = id;
    this.subject = subject;
    this.accDtaud = accDtaud;
    this.externalEntityName = externalEntityName;
    this.actTpdesc = actTpdesc;
    this.actNr = actNr;
    this.legislature = legislature;
    this.cmsNo = cmsNo;
    this.cmsAb = cmsAb;
  }
}

export class Audience extends AudienceAudition {

  constructor(audienceDetails: AudienceAuditionDetails) {
    super(audienceDetails);
  }
}

export class Audition extends AudienceAudition {

  constructor(auditionDetails: AudienceAuditionDetails[]) {
    super(auditionDetails);
  }
}

export class InitiativeDetails {

  @JsonProperty({ value: 'iniId' })
  id: number;

  @JsonProperty({ value: 'iniNr' })
  number: number;

  @JsonProperty({ value: 'iniTp' })
  type: string;

  @JsonProperty({ value: 'iniTpdesc' })
  typeDescription: string;

  @JsonProperty({ value: 'iniSelLg' })
  legislature: string;

  @JsonProperty({ value: 'iniSelNr' })
  selNr: number;

  @JsonProperty({ value: 'iniTi' })
  title: string;

  constructor(
    id: number,
    number: number,
    type: string,
    typeDescription: string,
    legislature: string,
    selNr: number,
    title: string,
  ) {
    this.id = id;
    this.number = number;
    this.type = type;
    this.typeDescription = typeDescription;
    this.legislature = legislature;
    this.selNr = selNr;
    this.title = title;
  }
}

export class RequerimentoDetails {

  @JsonProperty({ value: 'reqId' })
  id: number;

  @JsonProperty({ value: 'reqNr' })
  number: number;

  @JsonProperty({ value: 'reqLg' })
  legislature: string;

  @JsonProperty({ value: 'reqSl' })
  sl: number;

  @JsonProperty({ value: 'reqAs' })
  subject: string;

  @JsonProperty({ value: 'reqDt' })
  date: string;

  @JsonProperty({ value: 'reqPerTp' })
  perTp: string

  constructor(
    id: number,
    number: number,
    legislature: string,
    sl: number,
    subject: string,
    date: string,
    perTp: string,
  ) {
    this.id = id;
    this.number = number;
    this.legislature = legislature;
    this.sl = sl;
    this.subject = subject;
    this.date = date;
    this.perTp = perTp;
  }
}

@JsonIgnoreProperties({ value: ['pubLg'] })
export class InterventionDetails {

  @JsonProperty({ value: 'intId' })
  id: number;

  @JsonProperty({ value: 'intTe' })
  intTe: string;

  @JsonProperty({ value: 'intSu' })
  intSu: string;

  @JsonProperty({ value: 'pubDtreu' })
  pubDtreu: string;

  @JsonProperty({ value: 'pubTp' })
  pubTp: string;

  @JsonProperty({ value: 'pubLg' })
  legislature: string;

  @JsonProperty({ value: 'pubSl' })
  pubSl: string

  @JsonProperty({ value: 'pubNr' })
  number: number

  @JsonProperty({ value: 'tinDs' })
  tinDs: string

  @JsonProperty({ value: 'pubDar' })
  pubDar: string

  constructor(
    id: number,
    intTe: string,
    intSu: string,
    pubDtreu: string,
    pubTp: string,
    legislature: string,
    pubSl: string,
    number: number,
    tinDs: string,
    pubDar: string
  ) {
    this.id = id;
    this.intTe = intTe;
    this.intSu = intSu;
    this.pubDtreu = pubDtreu;
    this.pubTp = pubTp;
    this.legislature = legislature;
    this.pubSl = pubSl;
    this.number = number;
    this.tinDs = tinDs;
    this.pubDar = pubDar;
  }
}

export class ParlamentaryDetails {

  @JsonProperty({ value: 'actId' })
  id: number;

  @JsonProperty({ value: 'actNr' })
  number: number;

  @JsonProperty({ value: 'actTp' })
  type: string;

  @JsonProperty({ value: 'actTpdesc' })
  typeDescription: string;

  @JsonProperty({ value: 'actSelLg' })
  legislature: string;

  @JsonProperty({ value: 'actSelNr' })
  selNr: number

  @JsonProperty({ value: 'actDtent' })
  dataEnt: string

  @JsonProperty({ value: 'actDtdeb' })
  datetimeDeb: string

  @JsonProperty({ value: 'actAs' })
  subject: string

  constructor(
    id: number,
    number: number,
    type: string,
    typeDescription: string,
    legislature: string,
    selNr: number,
    dataEnt: string,
    datetimeDeb: string,
    subject: string
  ) {
    this.id = id;
    this.number = number;
    this.type = type;
    this.typeDescription = typeDescription;
    this.legislature = legislature;
    this.selNr = selNr;
    this.dataEnt = dataEnt;
    this.datetimeDeb = datetimeDeb;
    this.subject = subject;
  }
}

export class PermanentDelegationDetails {

  @JsonProperty({ value: 'depId' })
  id: number;

  @JsonProperty({ value: 'depNo' })
  depNo: string;

  @JsonProperty({ value: 'depSelLg' })
  legislature: string;

  @JsonProperty({ value: 'depSelNr' })
  depSelNr: number;

  @JsonProperty({ value: 'cdeCrg' })
  cdeCrg: string;

  @JsonProperty({ value: 'depReunioes' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [PermanentDelegationMeeting]] })
  meetings: PermanentDelegationMeeting[]

  constructor(
    id: number,
    depNo: string,
    legislature: string,
    depSelNr: number,
    cdeCrg: string,
    meetings: PermanentDelegationMeeting[]
  ) {
    this.id = id;
    this.depNo = depNo;
    this.legislature = legislature;
    this.depSelNr = depSelNr;
    this.cdeCrg = cdeCrg;
    this.meetings = meetings
  }
}

export class PermanentDelegationMeeting {

  @JsonProperty({ value: 'renLoc' })
  location: string;

  @JsonProperty({ value: 'renDtIni' })
  startDate: string;

  @JsonProperty({ value: 'renDtFim' })
  endDate: string;

  @JsonProperty({ value: 'renTi' })
  title: string;

  constructor(location: string, startDate: string, endDate: string, title: string) {
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.title = title;
  }
}

@JsonIgnoreProperties({ value: ['cmsLg'] })
export class ComissionDetails {

  @JsonProperty({ value: 'cmsNo' })
  name: string;

  @JsonProperty({ value: 'cmsCd' })
  code: number;

  @JsonProperty({ value: 'cmsLg' })
  legislature: string;

  @JsonProperty({ value: 'cmsSituacao' })
  status: string;

  constructor(name: string, code: number, legislature: string, status: string) {
    this.name = name;
    this.code = code;
    this.legislature = legislature;
    this.status = status;
  }
}

export class AudienceDetails {

  @JsonProperty({ value: 'actId' })
  id: number;

  @JsonProperty({ value: 'actAs' })
  subject: string;

  @JsonProperty({ value: 'accDtaud' })
  accDtaud: string;

  @JsonProperty({ value: 'nomeEntidadeExterna' })
  externalEntityName: string;

  @JsonProperty({ value: 'actTpdesc' })
  actTpdesc: string;

  @JsonProperty({ value: 'actNr' })
  actNr: string;

  @JsonProperty({ value: 'actLg' })
  legislature: string;

  @JsonProperty({ value: 'cmsNo' })
  cmsNo: string;

  @JsonProperty({ value: 'cmsAb' })
  cmsAb: string;

  constructor(
    id: number,
    subject: string,
    accDtaud: string,
    externalEntityName: string,
    actTpdesc: string,
    actNr: string,
    legislature: string,
    cmsNo: string,
    cmsAb: string,
  ) {
    this.id = id;
    this.subject = subject;
    this.accDtaud = accDtaud;
    this.externalEntityName = externalEntityName;
    this.actTpdesc = actTpdesc;
    this.actNr = actNr;
    this.legislature = legislature;
    this.cmsNo = cmsNo;
    this.cmsAb = cmsAb;
  }
}
