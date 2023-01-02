import {
  JsonClassType,
  JsonDeserialize,
  JsonFormat,
  JsonFormatShape,
  JsonManagedReference,
  JsonProperty,
  JsonTypeInfo,
  JsonTypeInfoId,
  JsonTypeInfoAs,
  JsonSubTypes,
  JsonTypeName,
  JsonTypeIdResolver,
  JsonTypeId
} from "jackson-js";
import { ClassType, JsonParserTransformerContext, JsonStringifierTransformerContext, TypeIdResolver } from "jackson-js/dist/@types";

// to move to utils
export const buildArray = (input: any) => input.constructor.name === 'Array' ? input : [input];


export interface Manifesto {
  title: string,
  sections: Section[]
}

export interface Section {
  position: number,
  title: string
  subSections?: SubSection[],
  topics?: Topic[],
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

// Deserialized objects
export class ManifestoDeserialized {

  @JsonProperty({ value: "title" })
  title: string;

  @JsonProperty({ value: "sections" })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [SectionDeserialized]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  sections: SectionDeserialized[];

  constructor(title: string, sections: SectionDeserialized[]) {
    this.title = title;
    this.sections = sections;
  }
}

export class SectionDeserialized {

  @JsonProperty({ value: "title" })
  title: string;

  @JsonProperty({ value: "position" })
  position: string;

  @JsonProperty({ value: "content" })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [SubSectionDeserialized]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  subSectionsOrTopics: SubSectionDeserialized[];

  constructor(title: string, position: string, subSectionsOrTopics: SubSectionDeserialized[]) {
    this.title = title;
    this.position = position;
    this.subSectionsOrTopics = subSectionsOrTopics;
  }
}

class CustomTypeResolver implements TypeIdResolver {
  idFromValue = (
    obj: any,
    context?: JsonStringifierTransformerContext | JsonParserTransformerContext
  ): string =>
    obj instanceof SubSectionDeserialized ? "SubSection2" : "Topic2"

  typeFromId = (
    id: string,
    context?: JsonStringifierTransformerContext | JsonParserTransformerContext
  ): ClassType<SubSectionOrTopicDeserialized> => {

    switch (id) {
      case "SubSection2":
        return SubSectionDeserialized;
      case "Topic2":
        return TopicDeserialized
      default:
        return TopicDeserialized
      // throw new Error("There is no valid object to deserialize.")
    }
  }
}

@JsonTypeInfo({
  use: JsonTypeInfoId.NAME,
  include: JsonTypeInfoAs.WRAPPER_OBJECT
})
@JsonSubTypes({
  types: [
    { class: () => Array<SubSectionDeserialized>, name: "SubSection" },
    { class: () => Array<TopicDeserialized>, name: "Topic" }
  ]
})
@JsonTypeIdResolver({ resolver: new CustomTypeResolver() })
class SubSectionOrTopicDeserialized { }

@JsonTypeName({ value: "SubSection" })
export class SubSectionDeserialized extends SubSectionOrTopicDeserialized {

  @JsonProperty({ value: "title" })
  title: string;

  @JsonProperty({ value: "position" })
  position: string;

  @JsonProperty({ value: "content" })
  @JsonManagedReference() @JsonClassType({ type: () => [Array, [TopicDeserialized]] })
  @JsonFormat({ shape: JsonFormatShape.ARRAY })
  @JsonDeserialize({
    using: buildArray
  })
  topics: TopicDeserialized[];

  constructor(title: string, position: string, topics: TopicDeserialized[]) {
    super();
    this.title = title;
    this.position = position;
    this.topics = topics;
  }
}

@JsonTypeName({ value: "Topic" })
export class TopicDeserialized extends SubSectionOrTopicDeserialized {

  @JsonProperty({ value: "html" })
  content: string;

  @JsonProperty({ value: "position" })
  position: string;

  constructor(content: string, position: string) {
    super();
    this.content = content;
    this.position = position;
  }
}
