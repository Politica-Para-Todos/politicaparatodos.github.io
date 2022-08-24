import type { NextPage } from 'next'
import LayoutHeader from '../src/components/layout-header';
import AboutUsFooter from '../src/components/layout-footer';
import HomeCountdown from '../src/components/home/countdown';
import { Layout } from 'antd';
import { HomeMission, HomeMissionInfographic } from '../src/components/home/mission';
import HomeMedia from '../src/components/home/media';

const Home: NextPage = () => (
  <Layout>
    <LayoutHeader />
    <Layout.Content>
      <HomeMissionInfographic />
      <HomeCountdown />
      <HomeMission />
      <HomeMedia />
    </Layout.Content>
    <AboutUsFooter />
  </Layout>
)

export default Home;
