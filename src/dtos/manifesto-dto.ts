export interface Manifesto {
  title: string;
  partyAcronym: string;
  sections: Section[];
}

export interface Section {
  subSections: SubSection[];
  position: number;
  title: string;
}

export interface SubSection {
  topic: Topic[];
  position: number;
  title: string;
}

export interface Topic {
  content: string;
  position: number;
}
