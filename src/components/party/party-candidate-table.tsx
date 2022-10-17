import React from "react";
import { Row, Col, Typography, List } from "antd";
import { Candidate } from "../../dtos/candidate-dto";
import { sortArrayByKey } from "../../utils/manipuation";

const { Title } = Typography;

interface PartyCandidatesTableProps {
  candidates: Candidate[]
}

const PartyCandidatesTable = (props: PartyCandidatesTableProps) => {

  const { candidates } = props;
  const mainCandidates = sortArrayByKey(candidates.filter((c: Candidate) => c.type === 'main'), 'position');
  const secondaryCandidates = sortArrayByKey(candidates.filter(c => c.type === 'secundary'), 'position');

  return (
    <section className="party-candidates-table">
      <div className="party-candidates-table__list">
        <Row>
          <Col span={24}>
            <Title level={3}>Efetivos</Title>
          </Col>
          <Col span={24}>
            <List
              bordered={false}
              dataSource={mainCandidates}
              renderItem={canditate => <List.Item>{`${canditate.position} - ${canditate.name}`}</List.Item>}
              className="party-candidates-table__items"
            />
          </Col>
        </Row>
      </div>
      <div className="party-candidates-table__list">
        <Row>
          <Col span={24}>
            <Title level={3}>Suplentes</Title>
          </Col>
          <Col span={24}>
            <List
              bordered={false}
              dataSource={secondaryCandidates}
              renderItem={item => <List.Item>{`${item.position} - ${item.name}`}</List.Item>}
              className="party-candidates-table__items"
            />
          </Col>
        </Row>
      </div>
    </section>
  )
};

export default PartyCandidatesTable;
