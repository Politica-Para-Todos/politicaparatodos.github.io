import { Col, Row, Select, Switch } from "antd";
import { useState } from "react";
import { electoralDistrictDropdown } from "../../src/retriever/dtos/electoral-district.dto";
import { HomePageParty } from "../../src/retriever/dtos/party-dto";
import { shuffleParties } from "../../src/utils/manipuation";
import AvatarList from "./avatar-list";

interface HomePartiesProps {
  parties: HomePageParty[];
}

enum ElectoralDistrictFilter {
  TODOS = 'TODOS',
  ACORES = "ACORES",
  AVEIRO = "AVEIRO",
  BEJA = "BEJA",
  BRAGA = "BRAGA",
  BRAGANCA = "BRAGANCA",
  CASTELO_BRANCO = "CASTELO_BRANCO",
  COIMBRA = "COIMBRA",
  EVORA = "EVORA",
  EUROPA = "EUROPA",
  FARO = "FARO",
  FORA_DA_EUROPA = "FORA_DA_EUROPA",
  GUARDA = "GUARDA",
  LEIRIA = "LEIRIA",
  LISBOA = "LISBOA",
  MADEIRA = "MADEIRA",
  PORTALEGRE = "PORTALEGRE",
  PORTO = "PORTO",
  SANATREM = "SANTAREM",
  SETUBAL = "SETUBAL",
  VIANA_DO_CASTELO = "VIANA_DO_CASTELO",
  VILA_REAL = "VILA_REAL",
  VISEU = "VISEU"
}

const HomeParties = ({ parties }: HomePartiesProps) => {
  const [selectedParties, setSelectedParties] = useState({
    alphabeticalOrder: false,
    districtFilter: ElectoralDistrictFilter.TODOS,
  });

  const sortByAlphabeticalOrder = () => {
    setSelectedParties({
      alphabeticalOrder: !selectedParties.alphabeticalOrder,
      districtFilter: selectedParties.districtFilter,
    });
  };

  const filterByElectoralDistrict = (district: string) => {
    setSelectedParties({
      alphabeticalOrder: selectedParties.alphabeticalOrder,
      districtFilter: convert(district),
    });
  };

  let filteredParties: HomePageParty[] = parties;

  if (selectedParties.districtFilter !== ElectoralDistrictFilter.TODOS) {
    filteredParties = parties.filter(party => [...party.electoralDistrict].find(district => isSameDistrict(district, selectedParties.districtFilter)));
  }

  if (selectedParties.alphabeticalOrder) {
    filteredParties = parties.sort((partyA, partyB) => partyA.acronym.toLowerCase().localeCompare(partyB.acronym.toLowerCase()));
  }
  else {
    filteredParties = shuffleParties(filteredParties);
  }

  return (
    <section
      id="parties-section"
      className="section-home-parties-list section--grey"
    >
      <Row>
        <Col span={24} lg={24}>
          <p className="home-parties-list_disclaimer">
            A ordem dos partidos a seguir é feita de forma aleatória.
            <br />
            Sempre que voltares a carregar esta página a ordem será diferente.
          </p>
          <Row typeof="flex" justify="space-between">
            <Col span={24} md={10}>
              <h2>Lista de Partidos</h2>
            </Col>
            <Col span={24} md={12}>
              <div className="alphabetic-order">
                <Switch
                  className="alphabetic-order__switch"
                  size="small"
                  onChange={sortByAlphabeticalOrder}
                />
                Ordenar alfabeticamente
              </div>
            </Col>
          </Row>
          <Row className="home-parties__circle-filter">
            <Col lg={7} span={24}>
              <Select
                style={{ width: "100%" }}
                placeholder="Escolha o Círculo Eleitoral"
                onChange={filterByElectoralDistrict}
              >
                {electoralDistrictDropdown().map((element, index) => (
                  <Select.Option key={index} value={element}>
                    {element}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>
          <AvatarList theme={"4x3"} parties={filteredParties} />
        </Col>
      </Row>
    </section>
  )
};

const isSameDistrict = (district: string, districtFilter: ElectoralDistrictFilter): boolean =>
  district === (districtFilter as string).toUpperCase();

const convert = (district: string): ElectoralDistrictFilter => {
  switch (district) {
    case 'Açores':
      return ElectoralDistrictFilter.ACORES;
    case 'Aveiro':
      return ElectoralDistrictFilter.AVEIRO;
    case "Beja":
      return ElectoralDistrictFilter.BEJA;
    case "Braga":
      return ElectoralDistrictFilter.BRAGA;
    case "Bragança":
      return ElectoralDistrictFilter.BRAGANCA;
    case "Castelo Branco":
      return ElectoralDistrictFilter.CASTELO_BRANCO;
    case "Coimbra":
      return ElectoralDistrictFilter.COIMBRA;
    case "Évora":
      return ElectoralDistrictFilter.EVORA;
    case "Europa":
      return ElectoralDistrictFilter.EUROPA;
    case "Faro":
      return ElectoralDistrictFilter.FARO;
    case "Fora da Europa":
      return ElectoralDistrictFilter.FORA_DA_EUROPA;
    case "Guarda":
      return ElectoralDistrictFilter.GUARDA;
    case "Leiria":
      return ElectoralDistrictFilter.LEIRIA;
    case "Lisboa":
      return ElectoralDistrictFilter.LISBOA
    case "Madeira":
      return ElectoralDistrictFilter.MADEIRA;
    case "PORTALEGRE":
      return ElectoralDistrictFilter.PORTALEGRE;
    case "PORTO":
      return ElectoralDistrictFilter.PORTO;
    case "SANTAREM":
      return ElectoralDistrictFilter.SANATREM;
    case "SETUBAL":
      return ElectoralDistrictFilter.SETUBAL;
    case "Viana do Castelo":
      return ElectoralDistrictFilter.VIANA_DO_CASTELO;
    case "Vila Real":
      return ElectoralDistrictFilter.VILA_REAL;
    case "Viseu":
      return ElectoralDistrictFilter.VISEU;
    default:
      return ElectoralDistrictFilter.TODOS
  }
}

export default HomeParties;
