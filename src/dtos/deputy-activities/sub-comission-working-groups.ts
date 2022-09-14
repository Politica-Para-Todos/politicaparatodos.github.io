import { JsonClassType, JsonDeserialize, JsonFormat, JsonFormatShape, JsonIgnoreProperties, JsonManagedReference, JsonProperty } from "jackson-js";
import { buildArray } from "../../utils/parlamento-api";

export class SubComissionWorkingGroup {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_SubComissoesGruposTrabalhoOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [SubComissionWorkingGroupDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  details: SubComissionWorkingGroupDetails[];

  constructor(details: SubComissionWorkingGroupDetails[]) {
    this.details = details;
  }
}

@JsonIgnoreProperties({ value: ['legislature'] })
export class SubComissionWorkingGroupDetails {

  @JsonProperty({ value: 'ccmDscom' })
  ccmDscom: string;

  @JsonProperty({ value: 'scmCd' })
  scmCd: number;

  @JsonProperty({ value: 'scmComCd' })
  scmComCd: number;

  @JsonProperty({ value: 'scmComLg' })
  legislature: string;

  @JsonProperty({ value: 'cmsSituacao' })
  cmsSituacao: string;

  constructor(
    ccmDscom: string,
    scmCd: number,
    scmComCd: number,
    legislature: string,
    cmsSituacao: string,
  ) {
    this.ccmDscom = ccmDscom;
    this.scmCd = scmCd;
    this.scmComCd = scmComCd;
    this.legislature = legislature;
    this.cmsSituacao = cmsSituacao;
  }
}
