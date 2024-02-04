import { ConfigProvider } from "antd";
import { Content } from "antd/es/layout/layout";
import LegislativeVideoSection from "../components/home/LegislativeVideoSection";
import LegislativeElectionCountdown from "../components/home/countdown";
import { LegislativeMission, Mission } from "../components/home/mission";
import PartiesSection from "../components/party/PartiesSection";

export const LegislativeElectionPage = () =>
  <ConfigProvider>
    <Content>
      <LegislativeMission />
      <LegislativeElectionCountdown />
      <Mission />
      <LegislativeVideoSection />
      <PartiesSection />
    </Content>
  </ConfigProvider>

export default LegislativeElectionPage;
