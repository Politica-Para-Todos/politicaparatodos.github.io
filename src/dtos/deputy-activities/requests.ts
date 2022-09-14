import { JsonClassType, JsonDeserialize, JsonFormat, JsonFormatShape, JsonIgnoreProperties, JsonManagedReference, JsonProperty } from "jackson-js";
import { buildArray } from "../../utils/parlamento-api";

export class RequestActivity {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_RequerimentosOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [RequestDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  requestDetails: RequestDetails[];

  constructor(requestDetails: RequestDetails[]) {
    this.requestDetails = requestDetails;
  }
}

@JsonIgnoreProperties({ value: ['legislature'] })
export class RequestDetails {

  @JsonProperty({ value: 'reqId' })
  id: number;

  @JsonProperty({ value: 'reqNr' })
  number: number;

  @JsonProperty({ value: 'reqTp' })
  reqTp: string;

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
    reqTp: string,
    legislature: string,
    sl: number,
    subject: string,
    date: string,
    perTp: string,
  ) {
    this.id = id;
    this.number = number;
    this.reqTp = reqTp;
    this.legislature = legislature;
    this.sl = sl;
    this.subject = subject;
    this.date = date;
    this.perTp = perTp;
  }
}
