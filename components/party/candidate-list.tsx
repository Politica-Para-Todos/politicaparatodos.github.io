import { Avatar, Col, Row, Select, Typography } from "antd";
import Link from "next/link";
import { useState } from "react";
import { convertToLabel, convertToValue, DropdownOption, electoralCircleDropdown, ElectoralCircleDropdownValue } from "../../src/dtos/electoral-circle-dto";
import { PartyPageLeadCandidate } from "../../src/dtos/party-dto";

const { Title, Paragraph } = Typography;
const { Option } = Select;

interface PartyCandidatesListProps {
  candidates: PartyPageLeadCandidate[];
  partyAcronym: string;
}

const PartyCandidatesList = ({ candidates, partyAcronym }: PartyCandidatesListProps) => {
  const [
    electoralCircleFilter,
    setElectoralCircleFilter
  ] = useState(ElectoralCircleDropdownValue.ALL);

  const filterCircle = (value: ElectoralCircleDropdownValue) =>
    setElectoralCircleFilter(value ?? ElectoralCircleDropdownValue.ALL);

  return (
    <section className="party-candidates">
      <Row>
        <Col lg={17} span={24}>
          <Title level={2}>Cabeças de Lista</Title>
        </Col>
        <Col lg={7} span={24} className="party-candidates__circles">
          <Select
            style={{ width: "100%" }}
            placeholder="Escolha o Círculo Eleitoral"
            onChange={filterCircle}
          >
            {electoralCircleDropdown.map((option: DropdownOption, index: number) =>
              <Option key={index} value={option.value}>
                {option.label}
              </Option>
            )}
          </Select>
        </Col>
        <Col lg={24} span={24}>
          <Paragraph>
            Clica na imagem do cabeça de lista para acederes à lista completa de
            candidatos efetivos e suplentes desse círculo eleitoral.
          </Paragraph>
        </Col>
      </Row>
      <Row typeof="flex" className="party-candidates__list">

        {candidates
          .filter(candidate =>
            convertToLabel(electoralCircleFilter) === candidate.electoralCircle ||
            electoralCircleFilter === ElectoralCircleDropdownValue.ALL
          )
          .map((candidate: PartyPageLeadCandidate, index: number) =>
            <Col
              key={index}
              span={12}
              sm={8}
              lg={6}
              xl={4}
              className="party-candidate"
            >
              <Link
                className="avatar-list-item"
                href={`/partido/${partyAcronym.toLowerCase()}/candidatos/${encodeURI(
                  convertToValue(candidate.electoralCircle)
                )}`}
                legacyBehavior={false}
              >
                <div className="party-candidate__content">
                  <Avatar
                    size={120}
                    src={`/party-candidates/${candidate.profileFileName}`}
                    icon="user"
                  />
                  {candidate.electoralCircle && (
                    <Paragraph className="party-candidate__content-circle">
                      {candidate.electoralCircle}
                    </Paragraph>
                  )}
                  {candidate.name && (
                    <Title
                      className="party-candidate__content-title"
                      level={3}
                    >
                      {candidate.name}
                    </Title>
                  )}
                </div>
              </Link>
            </Col>
          )}
      </Row>
    </section>
  );
};

export default PartyCandidatesList;
