import Image from "next/image";
import { Col, Row } from "antd";
import Infographic from "./infographic";

export const HomeMissionInfographic = () =>
  <section className="home-our-mission">
    <Row justify="space-between" align="middle">
      <Col
        span={24}
        md={{ offset: 4, span: 16 }}
        lg={{ offset: 0, span: 10 }}
        className="home-our-mission-text"
      >
        <h2>A nossa missão</h2>
        <p>
          Promover a participação activa dos cidadãos nos processos eleitorais
          em Portugal.
        </p>
      </Col>
      <Infographic />
    </Row>
  </section>

export const HomeMission = () =>
  <section className="home-our-mission home-our-mission-border">
    <Row justify="space-between" align="middle">
      <Col span={24} lg={24} className="home-our-mission-text">
        <p>
          Aproximam-se as{" "}
          <b>Eleições Legislativas de 30 de janeiro de 2022</b> e o Política
          Para Todos, enquanto grupo de cidadãos independentes, decidiu dar
          continuidade ao trabalho iniciado nas Eleições Legislativas de 2019.
        </p>
        <br />
        <p>
          Esperamos que seja útil para promover decisões informadas e
          conscientes. Estamos disponíveis através das nossas redes sociais ou
          em contacto@politicaparatodos.pt.
        </p>
      </Col>
    </Row>
  </section>
