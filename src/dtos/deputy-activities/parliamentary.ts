import { JsonClassType, JsonDeserialize, JsonFormat, JsonFormatShape, JsonIgnore, JsonIgnoreProperties, JsonManagedReference, JsonProperty } from "jackson-js";
import { buildArray } from "../../utils/parlamento-api";

export class ParliamentaryActivity {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_ActividadesParlamentaresOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [ParliamentaryDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  details: ParliamentaryDetails[];

  constructor(details: ParliamentaryDetails[]) {
    this.details = details;
  }
}

@JsonIgnoreProperties({ value: ['legislature'] })
export class ParliamentaryDetails {

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
