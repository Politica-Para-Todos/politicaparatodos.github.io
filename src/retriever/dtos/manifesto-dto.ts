export interface Manifesto {
  title: string,
  sections: Section[]
}

export interface Section {
  position: number,
  title: string
  subSections: SubSection[] | null,
  topics: Topic[] | null,
}

export interface SubSection {
  topics: Topic[];
  position: number;
  title: string;
}

export interface Topic {
  html: string;
  position: number;
}
