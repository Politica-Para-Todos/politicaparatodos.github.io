import { Divider, Layout } from "antd";
import { NextPage } from "next";
import AboutUsContributors from "../components/about-us/contributors";
import AboutUsFooter from "../components/about-us/footer";
import AboutUsJoinUs from "../components/about-us/join-us";
import AboutUsMotivation from "../components/about-us/motivation";
import LayoutHeader from "../components/global/layout-header";
import { AboutUsHeaderImage } from "../components/global/logos";
import MetaTags from "../components/global/meta-tags";

const AboutUs: NextPage = () =>
  <Layout>
    <MetaTags
      pageTitle="Quem somos"
      pageDescription="A comunidade Política Para Todos nasceu no verão de 2019 com o objetivo de promover a participação ativa dos cidadãos nos processos eleitorais em Portugal. É composta por voluntários de várias partes do país e diferentes áreas profissionais."
      socialTitle="Quem somos"
      socialDescription="A comunidade Política Para Todos nasceu no verão de 2019 com o objetivo de promover a participação ativa dos cidadãos nos processos eleitorais em Portugal. É composta por voluntários de várias partes do país e diferentes áreas profissionais."
      socialImage="/images/share/banner-PPT.jpg"
    />
    <LayoutHeader />
    <Layout.Content className="about-us-section">
      <AboutUsHeaderImage />
      <AboutUsContributors />
      <Divider />
      <AboutUsMotivation />
      <AboutUsJoinUs />
    </Layout.Content>
    <AboutUsFooter />
  </Layout>

export default AboutUs;
