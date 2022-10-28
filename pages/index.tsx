import type { NextPage } from 'next'
import LayoutHeader from '../src/components/layout-header';
import AboutUsFooter from '../src/components/layout-footer';
import HomeCountdown from '../src/components/home/countdown';
import { Layout } from 'antd';
import { HomeMission, HomeMissionInfographic } from '../src/components/home/mission';
import HomeMedia from '../src/components/home/media';
import MetaTags from '../src/components/meta-tags';
import HomeParties from '../src/components/home/parties';
import { Party } from '../src/dtos/party-dto';
import { retrieveJsonData } from '../src/retriever/api';

const Home: NextPage = ({ parties }: any) => {

  return (
    <Layout>
      <MetaTags
        pageTitle="Quem somos"
        pageDescription="A comunidade Política Para Todos nasceu no verão de 2019 com o objetivo de promover a participação ativa dos cidadãos nos processos eleitorais em Portugal. É composta por voluntários de várias partes do país e diferentes áreas profissionais."
        socialTitle="Quem somos"
        socialDescription="A comunidade Política Para Todos nasceu no verão de 2019 com o objetivo de promover a participação ativa dos cidadãos nos processos eleitorais em Portugal. É composta por voluntários de várias partes do país e diferentes áreas profissionais."
        socialImage="../public/vertical_logo.jpg"
      />
      <LayoutHeader />
      <Layout.Content>
        <HomeMissionInfographic />
        <HomeCountdown />
        <HomeMission />
        <HomeMedia />
        <HomeParties parties={parties} />
        <div className="getsocial gs-inline-group"></div>
      </Layout.Content>
      <AboutUsFooter />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const parties: Party[] = retrieveJsonData();

  return {
    props: { parties }
  }
}

export default Home;
