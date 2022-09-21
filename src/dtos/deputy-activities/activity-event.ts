import { JsonClassType, JsonDeserialize, JsonFormat, JsonFormatShape, JsonManagedReference, JsonProperty } from "jackson-js";
import { buildArray } from "../../utils/parlamento-api";

export class ActivityEvent {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_ActividadesComissaoOut' })
  // @JsonClassType({ type: () => [AudienceAuditionDetails] })
  // @JsonClassType({ type: () => [Array, [AudienceAuditionDetails]] })
  // @JsonClassType({ type: () => [Array, [EventDetails]] })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [Object]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  details: any[];

  constructor(details: any) {
    this.details = details;
  }
}
