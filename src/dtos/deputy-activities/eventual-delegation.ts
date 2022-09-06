import { 
  JsonClassType,
  JsonDeserialize,
  JsonFormat,
  JsonFormatShape,
  JsonIgnoreProperties,
  JsonManagedReference,
  JsonProperty
} from "jackson-js";
import { buildArray } from "../../utils/parlamento-api";

export class EventualDelegation {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_DelegacoesEventuaisOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [EventualDelegationDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  eventualDelegationDetails: EventualDelegationDetails[];

  constructor(eventualDelegationDetails: EventualDelegationDetails[]) {
    this.eventualDelegationDetails = eventualDelegationDetails;
  }
}

@JsonIgnoreProperties({ value: ['legislature'] })
export class EventualDelegationDetails {

  @JsonProperty({ value: 'devId' })
  id: number;

  @JsonProperty({ value: 'devNo' })
  devNo: string;

  @JsonProperty({ value: 'devLoc' })
  location: string;

  // 2022-06-10 00:00:00.0
  @JsonProperty({ value: 'devDtini' })
  startDate: string;

  @JsonProperty({ value: 'devDtfim' })
  endDate: string;

  @JsonProperty({ value: 'devTp' })
  type: string;

  @JsonProperty({ value: 'devSelLg' })
  legislature: string;

  @JsonProperty({ value: 'devSelNr' })
  devSelNr: string;

  constructor(
    id: number,
    devNo: string,
    location: string,
    startDate: string,
    endDate: string,
    type: string,
    legislature: string,
    devSelNr: string
  ) {
    this.id = id;
    this.devNo = devNo;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.type = type;
    this.legislature = legislature;
    this.devSelNr = devSelNr;
  }
}
