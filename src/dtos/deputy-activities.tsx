import { JsonClassType, JsonIgnore, JsonIgnoreProperties, JsonManagedReference, JsonProperty } from "jackson-js";
import { DeputyDetails } from "./base-info";

@JsonIgnoreProperties({value: ['xmlSchema', 'xmlSchemaInstance']})
export class DeputyActivities {

  @JsonProperty({value: '@xmlns:xsd'})
  xmlSchema: string;

  @JsonProperty({value: '@xmlns:xsi'})
  xmlSchemaInstance: string;
  
  @JsonProperty({value: 'AtividadeDeputado'})
  @JsonManagedReference() @JsonClassType({type: () => [Array, [Activities]]})
  activities: Activities[];

  constructor(xmlSchema: string, xmlSchemaInstance: string, activities: Activities[]) {
    this.xmlSchema = xmlSchema;
    this.xmlSchemaInstance = xmlSchemaInstance;
    this.activities = activities;
  }
}

export class Activities {

  @JsonProperty({value: 'AtividadeDeputadoList'})
  @JsonManagedReference() @JsonClassType({type: () => [DeputyActivityList]})
  deputyActivity: DeputyActivityList;

  @JsonProperty({value: 'deputado'})
  @JsonManagedReference() @JsonClassType({type: () => [DeputyDetails]})
  deputy: DeputyDetails

  constructor(deputyActivity: DeputyActivityList, deputy: DeputyDetails) {
    this.deputyActivity = deputyActivity;
    this.deputy = deputy;
  }
}

export class DeputyActivityList {

  @JsonProperty({value: 'pt_gov_ar_wsar_objectos_ActividadeOut'})
  @JsonManagedReference() @JsonClassType({type: () => [DeputyActivityStructure]})
  activityStructure: DeputyActivityStructure

  constructor(activityStructure: DeputyActivityStructure) {
    this.activityStructure = activityStructure;
  }
}

export class DeputyActivityStructure {
  
  @JsonProperty({value: 'ini'})
  @JsonManagedReference() @JsonClassType({type: () => [InitiativeActivity]})
  initiative: InitiativeActivity;

  @JsonProperty({value: 'req'})
  @JsonManagedReference() @JsonClassType({type: () => [RequerimentosActivity]})
  requerimentos: RequerimentosActivity;
  
  @JsonProperty({value: 'intev'})
  @JsonManagedReference() @JsonClassType({type: () => [InterventionsActivity]})
  interventions: InterventionsActivity;

  @JsonProperty({value: 'actP'})
  @JsonManagedReference() @JsonClassType({type: () => [ParlamentaryActivity]})
  parlamentaryActivities: ParlamentaryActivity;

  @JsonProperty({value: 'dlP'})
  @JsonManagedReference() @JsonClassType({type: () => [PermanentDelagations]})
  permanentDelegations: PermanentDelagations;
  
  @JsonProperty({value: 'rel'})
  @JsonIgnore()
  rel: null;
  
  // @JsonProperty({value: 'cms'})
  // @JsonManagedReference() @JsonClassType({type: () => [DeputyActivityStructure]})
  // comitions;

  // @JsonProperty({value: 'dadosLegisDeputado'})
  // @JsonManagedReference() @JsonClassType({type: () => [DeputyActivityStructure]})
  // // deputyData;

  // @JsonProperty({value: 'audiencias'})
  // @JsonManagedReference() @JsonClassType({type: () => [DeputyActivityStructure]})
  // // audiences;

  // @JsonProperty({value: 'audicoes'})
  // @JsonManagedReference() @JsonClassType({type: () => [DeputyActivityStructure]})
  // // auditions;

  constructor(
    initiative: InitiativeActivity,
    requerimentos: RequerimentosActivity,
    interventions: InterventionsActivity,
    parlamentaryActivities: ParlamentaryActivity,
    PermanentDelagations: PermanentDelagations,
    rel: null,
    ) {
      this.initiative = initiative;
      this.requerimentos = requerimentos;
      this.interventions = interventions;
      this.parlamentaryActivities = parlamentaryActivities;
      this.permanentDelegations = PermanentDelagations;
      this.rel = rel;
    }
}

export class InitiativeActivity {}
export class RequerimentosActivity {}
export class InterventionsActivity {}
export class ParlamentaryActivity {}
export class PermanentDelagations {}
