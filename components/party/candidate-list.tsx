import { Avatar, Col, Row, Select, Typography } from "antd";
import { useState } from "react";
import { Candidate } from "../../src/dtos/candidate-dto";
import { convertToLabel } from "../../src/dtos/electoral-circle-dto";

const { Title, Paragraph } = Typography;
const { Option } = Select;

interface PartyCandidatesListProps {
  circles: any[];
  candidates: any[];
  acronym: string;
}

const PartyCandidatesList = (props: PartyCandidatesListProps) => {
  const [state, setState] = useState({
    selectedCircle: "all",
  });

  const updateCircle = (value: string) => {
    const selectedCircle = value || "all";
    setState({ selectedCircle });
  };

  const { circles, candidates, acronym } = props;

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
            onChange={updateCircle}
          >
            {circles.map((circle: any) => (
              <Option key={circle.value} value={circle.value}>
                {circle.label}
              </Option>
            ))}
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
          .filter(
            (candidate: Candidate) =>
              candidate.electoralCircle === state.selectedCircle ||
              state.selectedCircle === "all"
          )
          .map((candidate: Candidate, index: number) => {
            return (
              <Col
                key={index}
                span={12}
                sm={8}
                lg={6}
                xl={4}
                className="party-candidate"
              >
                <a
                  className="avatar-list-item"
                  href={`/partido/${acronym.toLowerCase()}/candidatos/${encodeURIComponent(
                    candidate.electoralCircle
                  )}`}
                >
                  <div className="party-candidate__content">
                    <Avatar
                      size={120}
                      src={`/party-candidates/${candidate.photo}`}
                      icon="user"
                    />
                    {candidate.electoralCircle && (
                      <Paragraph className="party-candidate__content-circle">
                        {convertToLabel(candidate.electoralCircle)}
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
                </a>
              </Col>
            );
          })}
      </Row>
    </section>
  );
};

export default PartyCandidatesList;
