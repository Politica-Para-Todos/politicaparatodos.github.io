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

export class PermanentDelagation {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_DelegacoesPermanentesOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [PermanentDelegationDetails] })
  permanentDelegationDetails: PermanentDelegationDetails;

  constructor(permanentDelegationDetails: PermanentDelegationDetails) {
    this.permanentDelegationDetails = permanentDelegationDetails;
  }
}

@JsonIgnoreProperties({ value: ['legislature'] })
export class PermanentDelegationDetails {

  @JsonProperty({ value: 'depId' })
  id: number;

  @JsonProperty({ value: 'depNo' })
  depNo: string;

  @JsonProperty({ value: 'depSelLg' })
  legislature: string;

  @JsonProperty({ value: 'depSelNr' })
  depSelNr: number;

  @JsonProperty({ value: 'cdeCrg' })
  cdeCrg: string;

  @JsonProperty({ value: 'depReunioes' })
  @JsonManagedReference() @JsonClassType({ type: () => [PermanentDelegationMeeting] })
  meetings: PermanentDelegationMeeting

  constructor(
    id: number,
    depNo: string,
    legislature: string,
    depSelNr: number,
    cdeCrg: string,
    meetings: PermanentDelegationMeeting
  ) {
    this.id = id;
    this.depNo = depNo;
    this.legislature = legislature;
    this.depSelNr = depSelNr;
    this.cdeCrg = cdeCrg;
    this.meetings = meetings
  }
}

export class PermanentDelegationMeeting {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_ReunioesDelegacoesPermanentes' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [PermanentDelegationMeetingDetails]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  permanentDelegationMeetingDetails: PermanentDelegationMeetingDetails[];

  constructor(permanentDelegationMeetingDetails: PermanentDelegationMeetingDetails[]) {
    this.permanentDelegationMeetingDetails = permanentDelegationMeetingDetails;
  }
}

export class PermanentDelegationMeetingDetails {

  @JsonProperty({ value: 'renLoc' })
  location: string;

  @JsonProperty({ value: 'renDtIni' })
  startDate: string;

  @JsonProperty({ value: 'renDtFim' })
  endDate: string;

  @JsonProperty({ value: 'renTi' })
  title: string;

  constructor(location: string, startDate: string, endDate: string, title: string) {
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.title = title;
  }
}
