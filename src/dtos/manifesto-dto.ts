export interface Manifesto {
  id: string,
  title: string
  source: string
  sections: Section[]
}

export interface Section {
  position: number
  content: string
}
