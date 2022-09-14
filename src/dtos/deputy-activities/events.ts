import { JsonIgnoreProperties, JsonProperty } from "jackson-js";
import { ActivityEvent } from "./activity-event";

export class Event extends ActivityEvent {

  constructor(eventDetails: EventDetails[]) {
    super(eventDetails);
  }
}

@JsonIgnoreProperties({ value: ['actLg'] })
export class EventDetails {

  @JsonProperty({ value: 'actId' })
  id: number;

  @JsonProperty({ value: 'actAs' })
  subject: string;

  @JsonProperty({ value: 'actDtent' })
  date: string;

  @JsonProperty({ value: 'actLoc' })
  location: string;

  @JsonProperty({ value: 'actTp' })
  actTp: string;

  @JsonProperty({ value: 'actTpdesc' })
  description: string;

  @JsonProperty({ value: 'actLg' })
  legislature: string;

  @JsonProperty({ value: 'cmsNo' })
  cmsNo: string;

  @JsonProperty({ value: 'cmsAb' })
  cmsAb: string;

  @JsonProperty({ value: 'tevTp' })
  tevTp: string;

  @JsonProperty({ value: 'actSl' })
  actSl: string;

  constructor(
    id: number,
    subject: string,
    date: string,
    location: string,
    actTp: string,
    description: string,
    legislature: string,
    cmsNo: string,
    cmsAb: string,
    tevTp: string,
    actSl: string
  ) {
    this.id = id;
    this.subject = subject;
    this.date = date;
    this.location = location;
    this.actTp = actTp;
    this.description = description;
    this.legislature = legislature;
    this.cmsNo = cmsNo;
    this.cmsAb = cmsAb;
    this.tevTp = tevTp;
    this.actSl = actSl;
  }
}
