import { Col, List, Row, Typography } from "antd";

interface PartyCandidatesTableProps {
  candidates: {
    id: number,
    shortName: string,
    fullName: string,
    position: number,
    isSub: boolean
  }[]
}

const { Title } = Typography;

const PartyCandidatesTable = ({ candidates }: PartyCandidatesTableProps) => {
  const mainCandidates = candidates.filter(candidate => !candidate.isSub);
  const subCandidates = candidates.filter(candidate => candidate.isSub);

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
              renderItem={canditate => (
                <List.Item>{`${canditate.position} - ${canditate.fullName}`}</List.Item>
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
              dataSource={subCandidates}
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
