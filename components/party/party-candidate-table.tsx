import { Col, List, Row, Typography } from "antd";

interface PartyCandidatesTableProps {
  candidates: any;
}

const { Title } = Typography;

const PartyCandidatesTable = ({ candidates }: PartyCandidatesTableProps) => {
  const { main, secondary } = candidates;

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
              dataSource={main}
              renderItem={(canditate: any) => (
                <List.Item>{`${canditate.position} - ${canditate.name}`}</List.Item>
              )}
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
              dataSource={secondary}
              renderItem={(item: any) => (
                <List.Item>{`${item.position} - ${item.name}`}</List.Item>
              )}
              className="party-candidates-table__items"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PartyCandidatesTable;
