import { JsonProperty } from "jackson-js";
import { ActivityEvent } from "./activity-event";

export class Audience extends ActivityEvent {

  constructor(audienceDetails: AudienceAuditionDetails[]) {
    super(audienceDetails);
  }
}

export class Audition extends ActivityEvent {

  constructor(auditionDetails: AudienceAuditionDetails[]) {
    super(auditionDetails);
  }
}

export class AudienceAuditionDetails {

  @JsonProperty({ value: 'actId' })
  id: number;

  @JsonProperty({ value: 'actAs' })
  subject: string;

  @JsonProperty({ value: 'accDtaud' })
  accDtaud: string;

  @JsonProperty({ value: 'actTp' })
  actTp: string;

  @JsonProperty({ value: 'nomeEntidadeExterna' })
  externalEntityName: string;

  @JsonProperty({ value: 'actTpdesc' })
  actTpdesc: string;

  @JsonProperty({ value: 'actNr' })
  actNr: string;

  @JsonProperty({ value: 'actLg' })
  legislature: string;

  @JsonProperty({ value: 'cmsNo' })
  cmsNo: string;

  @JsonProperty({ value: 'cmsAb' })
  cmsAb: string;

  constructor(
    id: number,
    subject: string,
    accDtaud: string,
    actTp: string,
    externalEntityName: string,
    actTpdesc: string,
    actNr: string,
    legislature: string,
    cmsNo: string,
    cmsAb: string,
  ) {
    this.id = id;
    this.subject = subject;
    this.accDtaud = accDtaud;
    this.actTp = actTp;
    this.externalEntityName = externalEntityName;
    this.actTpdesc = actTpdesc;
    this.actNr = actNr;
    this.legislature = legislature;
    this.cmsNo = cmsNo;
    this.cmsAb = cmsAb;
  }
}
