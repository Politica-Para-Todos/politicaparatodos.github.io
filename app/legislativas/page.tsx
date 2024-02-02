import { ConfigProvider } from "antd";
import { Content } from "antd/es/layout/layout";
import LegislativeElectionCountdown from "../components/home/countdown";
import VideoSection from "../components/home/media";
import { LegislativeMission, Mission } from "../components/home/mission";
import PartiesSection from "../components/party/PartiesSection";


export const LegislativeElectionPage = () =>
  <ConfigProvider>
    <Content>
      <LegislativeMission />
      <LegislativeElectionCountdown />
      <Mission />
      <VideoSection />
      <PartiesSection />
    </Content>
  </ConfigProvider>

export default LegislativeElectionPage;
