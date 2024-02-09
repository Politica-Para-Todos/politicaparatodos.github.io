import { LinkOutlined } from "@ant-design/icons";
import { Alert, Card, Col, Layout, Row, Table } from "antd";
import { NextPage } from "next";
import LayoutFooter from "../components/global/layout-footer";
import LayoutHeader from "../components/global/layout-header";
import MetaTags from "../components/global/meta-tags";

const PoliticalDebates: NextPage = () =>
  <Layout>
    <MetaTags
      pageTitle="Debates Legislativas 2022"
      pageDescription="A comunidade Política Para Todos nasceu no verão de 2019 com o objetivo de promover a participação ativa dos cidadãos nos processos eleitorais em Portugal. É composta por voluntários de várias partes do país e diferentes áreas profissionais."
      socialTitle="Debates Legilativas 2022"
      socialDescription="A comunidade Política Para Todos nasceu no verão de 2019 com o objetivo de promover a participação ativa dos cidadãos nos processos eleitorais em Portugal. É composta por voluntários de várias partes do país e diferentes áreas profissionais."
      socialImage="/horizontal_logo.svg"
    />
    <LayoutHeader />
    <Layout.Content>
      <section className="debates">
        <Row typeof="flex" justify="space-between" align="middle">
          <Col span={24} lg={24} className="home-our-mission-text">
            <Alert
              message="Atenção"
              description="Esta é a programação conhecida de momento. A agenda poderá ser alterada pelos partidos e televisões."
              type="info"
            />
          </Col>
        </Row>
        <Row typeof="flex" justify="space-between" align="middle" className="debates_list">
          <Col span={24} lg={24} className="home-our-mission-text">
            <h1>Debates televisivos</h1>
            <p>Participam nos debates televisivos todos os partidos que, nas últimas eleições Legislativas (2019), conquistaram lugares parlamentares em várias rondas frente a frente. No final, ainda serão realizados dois debates com todos os partidos eleitos em 2019 (televisão e rádio) e outro com partidos não eleitos há dois anos.</p>
            <p>Subscreve o nosso calendário com horários dos debates actualizados:
              <a
                href="https://bit.ly/debates22-PPT"
                target="_blank"
                rel="noopener noreferrer"> Calendário Google de debates 2022 <LinkOutlined />
              </a>
            </p>
            <Table dataSource={debateDates} columns={tableColumns} className="debates__table" />
            <Card title="Perdeste um debate?">
              <p>A RTP Play disponibiliza todos os debates independentemente do canal que tenha exibido. Aproveita para rever o debate que procuras:</p>
              <ul>
                <li>
                  <a
                    href="https://www.rtp.pt/play/p9711/legislativas-2022-debates-rtp"
                    target="_blank"
                    rel="noopener noreferrer">Debates RTP/RTP3 <LinkOutlined />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rtp.pt/play/p9787/legislativas-2022-debates-sic-sic-noticias"
                    target="_blank"
                    rel="noopener noreferrer">Debates SIC/SIC Notícias <LinkOutlined />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rtp.pt/play/p9788/legislativas-2022-debates-tvi-cnn"
                    target="_blank"
                    rel="noopener noreferrer">Debates TVI/CNN Portugal <LinkOutlined />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rtp.pt/play/p9596/eleicoes-legislativas-2022-entrevistas-lideres-partidarios"
                    target="_blank"
                    rel="noopener noreferrer">Entrevista a lideres partidários <LinkOutlined />
                  </a>
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </section>
    </Layout.Content>
    <LayoutFooter />
  </Layout>

const debateDates = [
  {
    key: "1",
    data: "5 de Fevereiro",
    partidos: "PS x IL",
    canal: "SIC"
  },
  {
    key: "2",
    data: "5 de Fevereiro",
    partidos: "Chega x PAN",
    canal: "SIC Notícias"
  },
  {
    key: "3",
    data: "6 de Fevereiro",
    partidos: "CDU x PAN",
    canal: "RTP3"
  },
  {
    key: "4",
    data: "6 de Fevereiro",
    partidos: "AD x BE",
    canal: "TVI"
  },
  {
    key: "5",
    data: "6 de Fevereiro",
    partidos: "Chega x IL",
    canal: "SIC Notícias"
  },
  {
    key: "6",
    data: "7 de Fevereiro",
    partidos: "IL x Livre",
    canal: "CNN Portugal"
  },
  {
    key: "7",
    data: "8 de Fevereiro",
    partidos: "BE x Livre",
    canal: "SIC Notícias"
  },
  {
    key: "8",
    data: "9 de Fevereiro",
    partidos: "IL x PAN",
    canal: "SIC Notícias"
  },
  {
    key: "9",
    data: "9 de Fevereiro",
    partidos: "PS x Livre",
    canal: "RTP"
  },
  {
    key: "10",
    data: "9 de Fevereiro",
    partidos: "Chega x CDU",
    canal: "CNN Portugal"
  },
  {
    key: "11",
    data: "10 de Fevereiro",
    partidos: "AD x CDU",
    canal: "RTP1"
  },
  {
    key: "21",
    data: "10 de Fevereiro",
    partidos: "PS x PAN",
    canal: "TVI"
  },
  {
    key: "12",
    data: "11 de Fevereiro",
    partidos: "AD x PAN",
    canal: "SIC"
  },
  {
    key: "13",
    data: "11 de Fevereiro",
    partidos: "BE x CDU",
    canal: "SIC Notícias"
  },
  {
    key: "14",
    data: "12 de Fevereiro",
    partidos: "AD x Chega",
    canal: "RTP"
  },
  {
    key: "15",
    data: "13 de Fevereiro",
    partidos: "CDU x Livre",
    canal: "CNN Portugal"
  },
  {
    key: "16",
    data: "13 de Fevereiro",
    partidos: "Chega x BE",
    canal: "RTP3"
  },
  {
    key: "17",
    data: "14 de Fevereiro",
    partidos: "Livre x PAN",
    canal: "RTP3"
  },
  {
    key: "18",
    data: "14 de Fevereiro",
    partidos: "PS x Chega",
    canal: "TVI"
  },
  {
    key: "19",
    data: "14 de Fevereiro",
    partidos: "IL x CDU",
    canal: "RTP3"
  },
  {
    key: "20",
    data: "15 de Fevereiro",
    partidos: "IL x BE",
    canal: "CNN Portugal"
  },
  {
    key: "22",
    data: "16 de Fevereiro",
    partidos: "PS x BE",
    canal: "RTP"
  },
  {
    key: "23",
    data: "16 de Fevereiro",
    partidos: "AD x IL",
    canal: "SIC"
  },
  {
    key: "24",
    data: "16 de Fevereiro",
    partidos: "Chega x Livre",
    canal: "SIC Notícias"
  },
  {
    key: "25",
    data: "17 de Fevereiro",
    partidos: "AD x Livre",
    canal: "TVI"
  },
  {
    key: "26",
    data: "17 de Fevereiro",
    partidos: "PS x CDU",
    canal: "SIC"
  },
  {
    key: "27",
    data: "18 de Fevereiro",
    partidos: "BE x PAN",
    canal: "CNN Portugal"
  },
  {
    key: "28",
    data: "19 de Fevereiro",
    partidos: "AD x PS",
    canal: "TVI/RTP/SIC"
  },
  {
    key: "29",
    data: "20 de Fevereiro",
    partidos: "Partidos sem assento parlamentar",
    canal: "RTP1/RTP3"
  },
  {
    key: "30",
    data: "23 de Fevereiro",
    partidos: "Partidos com assento parlamentar",
    canal: "RTP1/RTP3"
  },
]

const tableColumns = [
  {
    title: "Data",
    dataIndex: "data",
    key: "data",
  },
  {
    title: "Partidos",
    dataIndex: "partidos",
    key: "partidos",
  },
  {
    title: "Canal",
    dataIndex: "canal",
    key: "canal",
  },
]

export default PoliticalDebates
