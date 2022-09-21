import {
  JsonClassType,
  JsonIgnoreProperties,
  JsonManagedReference,
  JsonProperty
} from "jackson-js";
import { DeputyDetails } from "../base-info";
import { Audience, Audition } from "./audience-audition";
import { Comission as Comission } from "./comissions";
import { Deslocacao } from "./deslocacao";
import { Event } from "./events";
import { EventualDelegation } from "./eventual-delegation";
import { InitiativeActivity } from "./initiatives";
import { InterventionActivity } from "./interventions";
import { ParliamentaryActivity } from "./parliamentary";
import { PermanentDelagation } from "./permanent-delegation";
import { Rapporteur } from "./rapporteur";
import { RequestActivity } from "./requests";
import { SubComissionWorkingGroup } from "./sub-comission-working-groups";
import { YoungParliament } from "./young-parlament";

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
  @JsonManagedReference() @JsonClassType({ type: () => [DeputyActivityStructure] })
  deputyActivity: DeputyActivityStructure;

  @JsonProperty({ value: 'deputado' })
  @JsonManagedReference() @JsonClassType({ type: () => [DeputyDetails] })
  deputy: DeputyDetails

  constructor(deputyActivity: DeputyActivityStructure, deputy: DeputyDetails) {
    this.deputyActivity = deputyActivity;
    this.deputy = deputy;
  }
}

export class DeputyActivityStructure {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_ActividadeOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [DeputyActivityDetails] })
  activityStructure: DeputyActivityDetails

  constructor(activityStructure: DeputyActivityDetails) {
    this.activityStructure = activityStructure;
  }
}

@JsonIgnoreProperties({ value: ['deputyData'] })
export class DeputyActivityDetails {

  @JsonProperty({ value: 'ini' })
  @JsonManagedReference() @JsonClassType({ type: () => [InitiativeActivity] })
  initiative: InitiativeActivity | null;

  @JsonProperty({ value: 'req' })
  @JsonManagedReference() @JsonClassType({ type: () => [RequestActivity] })
  request: RequestActivity | null;

  @JsonProperty({ value: 'scgt' })
  @JsonManagedReference() @JsonClassType({ type: () => [SubComissionWorkingGroup] })
  subComissionWorkingGroup: SubComissionWorkingGroup | null;

  @JsonProperty({ value: 'intev' })
  @JsonManagedReference() @JsonClassType({ type: () => [InterventionActivity] })
  interventions: InterventionActivity | null;

  @JsonProperty({ value: 'actP' })
  @JsonManagedReference() @JsonClassType({ type: () => [ParliamentaryActivity] })
  parliamentaryActivity: ParliamentaryActivity | null;

  @JsonProperty({ value: 'dlP' })
  @JsonManagedReference() @JsonClassType({ type: () => [PermanentDelagation] })
  permanentDelegation: PermanentDelagation | null;

  @JsonProperty({ value: 'dlE' })
  @JsonManagedReference() @JsonClassType({ type: () => [EventualDelegation] })
  eventualDelegation: EventualDelegation | null;

  @JsonProperty({ value: 'rel' })
  @JsonManagedReference() @JsonClassType({ type: () => [Rapporteur] })
  rapporteur: Rapporteur | null;

  @JsonProperty({ value: 'eventos' })
  @JsonManagedReference() @JsonClassType({ type: () => [Event] })
  event: Event | null;

  @JsonProperty({ value: 'deslocacoes' })
  @JsonManagedReference() @JsonClassType({ type: () => [Deslocacao] })
  deslocacao: Deslocacao | null;

  @JsonProperty({ value: 'cms' })
  @JsonManagedReference() @JsonClassType({ type: () => [Comission] })
  comission: Comission | null;

  @JsonProperty({ value: 'dadosLegisDeputado' })
  deputyData: any;

  @JsonProperty({ value: 'audiencias' })
  @JsonManagedReference() @JsonClassType({ type: () => [Audience] })
  audience: Audience | null;

  @JsonProperty({ value: 'audicoes' })
  @JsonManagedReference() @JsonClassType({ type: () => [Audition] })
  audition: Audition | null;

  @JsonProperty({ value: 'parlamentoJovens' })
  @JsonManagedReference() @JsonClassType({ type: () => [YoungParliament] })
  youngParliament: YoungParliament | null;

  constructor(
    initiative: InitiativeActivity | null,
    request: RequestActivity | null,
    subComissionWorkingGroup: SubComissionWorkingGroup | null,
    intervention: InterventionActivity | null,
    parliamentaryActivity: ParliamentaryActivity | null,
    permanentDelagation: PermanentDelagation | null,
    eventualDelegation: EventualDelegation | null,
    rapporteur: Rapporteur | null,
    event: Event | null,
    deslocacao: Deslocacao | null,
    comission: Comission | null,
    deputyData: any,
    audience: Audience | null,
    audition: Audition | null,
    youngParliament: YoungParliament | null
  ) {
    this.initiative = initiative;
    this.request = request;
    this.subComissionWorkingGroup = subComissionWorkingGroup;
    this.interventions = intervention;
    this.parliamentaryActivity = parliamentaryActivity;
    this.permanentDelegation = permanentDelagation;
    this.eventualDelegation = eventualDelegation;
    this.rapporteur = rapporteur;
    this.event = event;
    this.deslocacao = deslocacao
    this.comission = comission;
    this.deputyData = deputyData;
    this.audience = audience;
    this.audition = audition;
    this.youngParliament = youngParliament;
  }
}
