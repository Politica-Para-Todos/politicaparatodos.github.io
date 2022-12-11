import React from "react";
import { Row, Col } from "antd";
import ContributorsList from "../contributors-list";

const AboutUsContributors = () => {
  return (
    <section className="about-us-contributors">
      <Row typeof="flex" justify="space-between" align="middle">
        <Col span={24}>
          <h2 className="about-us-contributors-title">Quem Somos</h2>
          <p>
            A comunidade Política Para Todos nasceu no verão de 2019 com o
            objetivo de promover a participação ativa dos cidadãos nos processos
            eleitorais em Portugal. É composta por voluntários de várias partes
            do país e diferentes áreas profissionais. Adotamos princípios de
            transparência radical na nossa forma de trabalho: toda a comunicação
            interna está disponível numa plataforma aberta, as reuniões são
            gravadas e também de acesso livre. A adesão à comunidade é aberta
            para qualquer cidadão.
          </p>
          <br />
          <p>
            Podes consultar{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.loomio.org/g/ZqT2uPv6/politica-para-todos"
            >
              aqui
            </a>{" "}
            todo o histórico do projecto.
          </p>
          <p className="about-us-contributors-list">
            <ContributorsList />
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default AboutUsContributors;
