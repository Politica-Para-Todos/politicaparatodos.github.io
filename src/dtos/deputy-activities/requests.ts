import { JsonClassType, JsonIgnoreProperties, JsonManagedReference, JsonProperty } from "jackson-js";

export class RequestActivity {

  @JsonProperty({ value: 'pt_gov_ar_wsar_objectos_RequerimentosOut' })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [RequestDetails]] })
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

@JsonIgnoreProperties({ value: ['pubLg'] })
export class InterventionDetails {

  @JsonProperty({ value: 'intId' })
  id: number;

  @JsonProperty({ value: 'intTe' })
  intTe: string;

  @JsonProperty({ value: 'intSu' })
  intSu: string;

  @JsonProperty({ value: 'pubDtreu' })
  pubDtreu: string;

  @JsonProperty({ value: 'pubTp' })
  pubTp: string;

  @JsonProperty({ value: 'pubLg' })
  legislature: string;

  @JsonProperty({ value: 'pubSl' })
  pubSl: string

  @JsonProperty({ value: 'pubNr' })
  number: number

  @JsonProperty({ value: 'tinDs' })
  tinDs: string

  @JsonProperty({ value: 'pubDar' })
  pubDar: string

  constructor(
    id: number,
    intTe: string,
    intSu: string,
    pubDtreu: string,
    pubTp: string,
    legislature: string,
    pubSl: string,
    number: number,
    tinDs: string,
    pubDar: string
  ) {
    this.id = id;
    this.intTe = intTe;
    this.intSu = intSu;
    this.pubDtreu = pubDtreu;
    this.pubTp = pubTp;
    this.legislature = legislature;
    this.pubSl = pubSl;
    this.number = number;
    this.tinDs = tinDs;
    this.pubDar = pubDar;
  }
}
