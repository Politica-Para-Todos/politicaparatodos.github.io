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
  AVEIRO = "Aveiro",
  TODOS = "Todos",
  LISBOA = "Lisboa"
}

const isSameDistrict = (district: string, districtFilter: ElectoralDistrictFilter): boolean =>
  district === (districtFilter as string).toUpperCase();

const HomeParties = ({ parties }: HomePartiesProps) => {
  const [state, setState] = useState({
    alphabeticalOrder: false,
    districtFilter: ElectoralDistrictFilter.TODOS,
  });

  const onChange = () => {
    setState({
      alphabeticalOrder: !state.alphabeticalOrder,
      districtFilter: state.districtFilter,
    });
  };

  const filterParties = (district: string) => {
    setState({
      alphabeticalOrder: state.alphabeticalOrder,
      districtFilter: district as ElectoralDistrictFilter,
    });
  };

  let filteredParties: HomePageParty[] = parties;

  if (state.districtFilter !== ElectoralDistrictFilter.TODOS) {
    filteredParties = parties.filter(party => [...party.electoralDistrict].find(district => isSameDistrict(district, state.districtFilter)));
  }

  if (state.alphabeticalOrder) {
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
                  onChange={onChange}
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
                onChange={filterParties}
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
  );
};

export default HomeParties;
