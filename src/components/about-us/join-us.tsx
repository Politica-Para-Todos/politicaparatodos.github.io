import React from "react";
import { Row, Col } from "antd";

const AboutUsJoinUs = () => (
  <section className="about-us-join-us section--grey">
    <Row typeof="flex">
      <Col span={24} md={{ offset: 2, span: 20 }}>
        <h2>Junta-te a nós!</h2>
        <p>
          Este projecto é aberto a todos os que se identifiquem com os valores
          do nosso manifesto. Trabalhamos de acordo com os princípios de
          transparência radical: todas as nossas decisões são públicas e é clara
          qual a contribuição de cada indivíduo. Toda a comunicação deste
          projecto passa pela nossa página na plataforma Loomio. Entra
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.loomio.org/g/ZqT2uPv6/politica-para-todos"
          >
            neste link
          </a>{" "}
          para ver toda a nossa comunicação, e caso queiras contribuir, vai até
          à conversa &quot;Como Contribuir&quot;. Ficamos à espera!
        </p>
      </Col>
    </Row>
  </section>
);

export default AboutUsJoinUs;
