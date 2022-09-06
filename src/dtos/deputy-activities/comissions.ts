import { JsonClassType, JsonDeserialize, JsonFormat, JsonFormatShape, JsonIgnoreProperties, JsonManagedReference, JsonProperty } from "jackson-js";
import { buildArray } from "../../utils/parlamento-api";

export class Comissions {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_ComissoesOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [ComissionDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  comissionDetails: ComissionDetails[];

  constructor(comissionDetails: ComissionDetails[]) {
    this.comissionDetails = comissionDetails;
  }
}

@JsonIgnoreProperties({ value: ['legislature'] })
export class ComissionDetails {

  @JsonProperty({ value: 'cmsNo' })
  name: string;

  @JsonProperty({ value: 'cmsCd' })
  code: number;

  @JsonProperty({ value: 'cmsLg' })
  legislature: string;

  @JsonProperty({ value: 'cmsCargo' })
  position: string | null;

  @JsonProperty({ value: 'cmsSituacao' })
  status: string;

  constructor(
    name: string,
    code: number,
    legislature: string,
    position: string,
    status: string
  ) {
    this.name = name;
    this.code = code;
    this.legislature = legislature;
    this.position = position;
    this.status = status;
  }
}
