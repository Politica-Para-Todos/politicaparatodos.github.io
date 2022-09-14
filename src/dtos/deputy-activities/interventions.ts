import { JsonClassType, JsonDeserialize, JsonFormat, JsonFormatShape, JsonIgnoreProperties, JsonManagedReference, JsonProperty } from "jackson-js";
import { buildArray } from "../../utils/parlamento-api";

export class InterventionActivity {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_IntervencoesOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [InterventionDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  interventionDetails: InterventionDetails[];

  constructor(interventionDetails: InterventionDetails[]) {
    this.interventionDetails = interventionDetails;
  }
}

@JsonIgnoreProperties({ value: ['legislature'] })
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
