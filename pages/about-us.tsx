import { Divider, Layout } from "antd";
import { NextPage } from "next";
import AboutUsFooter from "../src/components/about-us/footer";
import AboutUsJoinUs from "../src/components/about-us/join-us";
import AboutUsMotivation from "../src/components/about-us/motivation";
import AboutUsContributors from "../src/components/about-us/contributors";
import LayoutHeader from "../src/components/layout-header";
import MetaTags from "../src/components/meta-tags";

const AboutUs: NextPage = () => (
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
      <img src='rows-people.svg' className="about-us__header-img" alt="people" />
      <AboutUsContributors />
      <Divider />
      <AboutUsMotivation />
      <AboutUsJoinUs />
    </Layout.Content>
    <AboutUsFooter />
  </Layout>
);

export default AboutUs;
