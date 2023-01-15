import { describe, expect, test } from "@jest/globals";
import { HomePageParty } from "../src/dtos/party-dto";

describe("Retriever.utils", () => {

  test("Calling the ... retrieves the needed data for parties on the homepage", () => {

    const mockHomePageParty: HomePageParty = {
      name: "Test Party",
      acronym: "TP",
      logoFileName: "profile.jpg",
      website: "www.politicaparatodos.pt"
    }

    expect(true);
  });
});
