import { ConfigProvider } from "antd";
import { Content } from "antd/es/layout/layout";
import HomeCountdown from "./components/home/countdown";
import HomeMedia from "./components/home/media";
import { HomeMission, HomeMissionInfographic } from "./components/home/mission";

export const HomePage = () =>
  <ConfigProvider>
    <Content>
      <HomeMissionInfographic />
      <HomeCountdown />
      <HomeMission />
      <HomeMedia />
    </Content>
  </ConfigProvider>

export default HomePage;
