import { Layout } from "antd";
import type { NextPage } from "next";
import LayoutFooter from "../components/global/layout-footer";
import LayoutHeader from "../components/global/layout-header";
import MetaTags from "../components/global/meta-tags";
import HomeCountdown from "../components/home/countdown";
import HomeMedia from "../components/home/media";
import { HomeMission, HomeMissionInfographic } from "../components/home/mission";
import HomeParties from "../components/home/parties";
import { HomePageParty } from "../src/retriever/dtos/party-dto";
import { Retriever, SeedsJsonRetriever } from "../src/retriever/service";

interface HomePageProps {
  homePageParties: HomePageParty[];
}

const Home: NextPage<HomePageProps> = ({ homePageParties }) =>
  <Layout>
    <MetaTags
      pageTitle="Política Para Todos"
      pageDescription="A comunidade Política Para Todos nasceu no verão de 2019 com o objetivo de promover a participação ativa dos cidadãos nos processos eleitorais em Portugal. É composta por voluntários de várias partes do país e diferentes áreas profissionais."
      socialTitle="Quem somos"
      socialDescription="A comunidade Política Para Todos nasceu no verão de 2019 com o objetivo de promover a participação ativa dos cidadãos nos processos eleitorais em Portugal. É composta por voluntários de várias partes do país e diferentes áreas profissionais."
      socialImage="/vertical_logo.jpg"
    />
    <LayoutHeader />
    <Layout.Content>
      <HomeMissionInfographic />
      <HomeCountdown />
      <HomeMission />
      <HomeMedia />
      <HomeParties parties={homePageParties} />
      <div className="getsocial gs-inline-group"></div>
    </Layout.Content>
    <LayoutFooter />
  </Layout>

export const getStaticProps = async () => {
  const retriever: SeedsJsonRetriever = new Retriever();

  return {
    props: {
      homePageParties: retriever.homePageParties()
    },
  };
};

export default Home;
