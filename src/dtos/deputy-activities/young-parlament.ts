import { JsonClassType, JsonDeserialize, JsonFormat, JsonFormatShape, JsonIgnoreProperties, JsonManagedReference, JsonProperty } from "jackson-js";
import { buildArray } from "../../utils/parlamento-api";

export class YoungParliament {

  @JsonProperty({ value: 'pt_ar_wsgode_objectos_DadosDeputado' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [YoungParliamentDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  details: YoungParliamentDetails[];

  constructor(details: YoungParliamentDetails[]) {
    this.details = details;
  }
}

@JsonIgnoreProperties({ value: ['legislature'] })
export class YoungParliamentDetails {

  @JsonProperty({ value: 'legislatura' })
  legislature: string;

  @JsonProperty({ value: 'data' })
  date: string;

  @JsonProperty({ value: 'tipoReuniao' })
  meetingType: string;

  @JsonProperty({ value: 'circuloEleitoral' })
  electoralCircle: string;

  @JsonProperty({ value: 'sessao' })
  session: string;

  constructor(
    legislature: string,
    date: string,
    meetingType: string,
    electoralCircle: string,
    session: string
  ) {
    this.legislature = legislature;
    this.date = date;
    this.meetingType = meetingType;
    this.electoralCircle = electoralCircle;
    this.session = session;
  }
}
