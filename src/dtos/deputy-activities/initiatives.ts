import { JsonClassType, JsonDeserialize, JsonFormat, JsonFormatShape, JsonIgnoreProperties, JsonManagedReference, JsonProperty } from "jackson-js";
import { buildArray } from "../../utils/parlamento-api";

export class InitiativeActivity {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_IniciativasOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [InitiativeDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  initiativeDetails: InitiativeDetails[]

  constructor(initiativeDetails: InitiativeDetails[]) {
    this.initiativeDetails = initiativeDetails;
  }
}

@JsonIgnoreProperties({ value: ['legislature'] })
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
