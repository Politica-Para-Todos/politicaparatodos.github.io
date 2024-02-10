import { Avatar, Col, Row, Select, Typography } from "antd";
import Link from "next/link";
import { useState } from "react";
import { convertElectoralDistrictToUrl, electoralDistrictDropdown } from "../../src/retriever/dtos/electoral-district.dto";
import { PartyPageLeadCandidate } from "../../src/retriever/dtos/party-dto";
import { Conversion, acronymConversion } from "../../src/utils/manipuation";

const { Title, Paragraph } = Typography;
const { Option } = Select;

interface PartyCandidatesListProps {
  candidates: PartyPageLeadCandidate[];
  partyAcronym: string;
}

const PartyCandidatesList = ({ candidates, partyAcronym }: PartyCandidatesListProps) => {
  const [electoralCircleFilter, setElectoralCircleFilter] = useState('Todos');

  const filterCandidates = (value: string) =>
    setElectoralCircleFilter(value ?? 'Todos');

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
            onChange={filterCandidates}
          >
            {electoralDistrictDropdown().map((option: string, index: number) =>
              <Option key={index} value={option}>
                {option}
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
            electoralCircleFilter === candidate.electoralDistrict ||
            electoralCircleFilter === 'Todos'
          )
          .map(candidate =>
            <Col
              key={candidate.id}
              span={12}
              sm={8}
              lg={6}
              xl={4}
              className="party-candidate"
            >
              <Link
                className="avatar-list-item"
                href={`/partido/${acronymConversion(partyAcronym, Conversion.TO_URL)}/candidatos/${encodeURI(
                  convertElectoralDistrictToUrl(candidate.electoralDistrict)
                )}`}
                legacyBehavior={false}
              >
                <div className="party-candidate__content">
                  <Avatar
                    size={120}
                    src={`/party-candidates/${candidate.photoFileName}`}
                    icon="user"
                  />
                  {candidate.electoralDistrict && (
                    <Paragraph className="party-candidate__content-circle">
                      {candidate.electoralDistrict}
                    </Paragraph>
                  )}
                  {candidate.shortName && (
                    <Title
                      className="party-candidate__content-title"
                      level={3}
                    >
                      {candidate.shortName}
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
