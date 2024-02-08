'use client';

import { electoralCircleDropdown } from "@/retriever/dtos/electoral-circle-dto";
import { Col, Row, Select, Switch } from "antd";
import { useState } from "react";
import { shuffleParties } from "../../utils/manipuation";
import { LegislativeHomeParty } from "./PartiesSection";
import PartyRoundAvatar from "./PartyRoundAvatar";

interface PartiesGridProps {
  parties: LegislativeHomeParty[],
  theme: string
}

enum ElectoralCircleFilter {
  TODOS = "Todos",
  BRAGANCa = "Bragança",
  LISBOA = "Lisboa",
  PORTO = 'Porto'
}

const PartiesGrid = ({ parties, theme }: PartiesGridProps) => {
  let sortedParties: LegislativeHomeParty[];
  console.log(parties);

  const [state, setState] = useState({
    isAlphabeticalOrder: false,
    districtFilter: ElectoralCircleFilter.TODOS,
  });

  const onChange = () => {
    setState({
      isAlphabeticalOrder: !state.isAlphabeticalOrder,
      districtFilter: state.districtFilter,
    });
  };

  const filterDisctrict = (district: string) => {
    setState({
      isAlphabeticalOrder: state.isAlphabeticalOrder,
      districtFilter: district as ElectoralCircleFilter,
    });
  };

  if (state.districtFilter !== ElectoralCircleFilter.TODOS) {
    sortedParties = parties.filter((party: LegislativeHomeParty) => [...party.electoralCircles].filter(district => district === state.districtFilter));
  }

  if (state.isAlphabeticalOrder) {
    // sortedParties = parties.sort((partyA, partyB) => partyA.acronym.toLowerCase().localeCompare(partyB.acronym.toLowerCase()));
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
    <>
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
          <div
            className={`avatar-list-container avatar-list-container avatar-list-container--${theme}`}
          >
            {parties.map(party => (
              <PartyRoundAvatar key={party.acronym} party={party} />
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PartiesGrid;
