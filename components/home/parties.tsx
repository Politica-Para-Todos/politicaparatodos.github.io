import { Col, Row, Select, Switch } from "antd";
import { useState } from "react";
import { electoralCircleDropdown } from "../../src/dtos/electoral-circle-dto";
import { HomeParty } from "../../src/dtos/party-dto";
import { shuffleParties } from "../../src/utils/manipuation";
import AvatarList from "./avatar-list";

interface HomePartiesProps {
  parties: HomeParty[];
}

const HomeParties = ({ parties }: HomePartiesProps) => {
  let sortedParties: HomeParty[];

  const [state, setState] = useState({
    alphabeticalOrder: false,
    districtFilter: "Todos",
  });

  const onChange = () => {
    setState({
      alphabeticalOrder: !state.alphabeticalOrder,
      districtFilter: state.districtFilter,
    });
  };

  const filterDisctrict = (district: string) => {
    setState({
      alphabeticalOrder: state.alphabeticalOrder,
      districtFilter: district,
    });
  };

  // if (state.districtFilter !== "Todos") {
  //   sortedParties = parties.filter((party: Party) => party.includes(district));
  // }

  if (state.alphabeticalOrder) {
    const partiesToSort = [...parties];
    sortedParties = partiesToSort.sort((party1, party2) => {
      const partyName1 = party1.acronym.toLowerCase();
      const partyName2 = party2.acronym.toLowerCase();

      if (partyName1 > partyName2) {
        return 1;
      }
      if (partyName1 < partyName2) {
        return -1;
      }
      return 0;
    });
  } else {
    sortedParties = shuffleParties(parties);
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
                onChange={filterDisctrict}
              >
                {electoralCircleDropdown.map(element => (
                  <Select.Option key={element.value} value={element.label}>
                    {element.label}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>
          <AvatarList theme={"4x3"} parties={sortedParties} />
        </Col>
      </Row>
    </section>
  );
};

export default HomeParties;
