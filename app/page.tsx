import { Layout } from "antd";
import LayoutFooter from "./components/global/layout-footer";
import LayoutHeader from "./components/header/LayoutHeader";

const HomePage = () =>
  <Layout>
    {/* <MetaTags
      pageTitle="Política Para Todos"
      pageDescription="A comunidade Política Para Todos nasceu no verão de 2019 com o objetivo de promover a participação ativa dos cidadãos nos processos eleitorais em Portugal. É composta por voluntários de várias partes do país e diferentes áreas profissionais."
      socialTitle="Quem somos"
      socialDescription="A comunidade Política Para Todos nasceu no verão de 2019 com o objetivo de promover a participação ativa dos cidadãos nos processos eleitorais em Portugal. É composta por voluntários de várias partes do país e diferentes áreas profissionais."
      socialImage="/vertical_logo.jpg"
    /> */}
    <LayoutHeader />
    <Layout.Content>
      <h1>LOL</h1>
      {/* <HomeMissionInfographic />
    <HomeCountdown />
    <HomeMission />
    <HomeMedia />
    <HomeParties parties={homePageParties} />
    <div className="getsocial gs-inline-group"></div> */}
    </Layout.Content>
    <LayoutFooter />
  </Layout>

export default HomePage;
