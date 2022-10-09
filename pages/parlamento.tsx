import { NextPage } from "next";
import { Layout } from 'antd';
import LayoutHeader from "../src/components/layout-header";
import MetaTags from "../src/components/meta-tags";
import Hemicycle from "../src/components/parlament/hemicycle";

const Parlament: NextPage = () => (
  <Layout>
    <MetaTags
      pageTitle="PPT - Parlamento"
      pageDescription="A comunidade Política Para Todos nasceu no verão de 2019 com o objetivo de promover a participação ativa dos cidadãos nos processos eleitorais em Portugal. É composta por voluntários de várias partes do país e diferentes áreas profissionais."
      socialTitle="Parlamento"
      socialDescription="A comunidade Política Para Todos nasceu no verão de 2019 com o objetivo de promover a participação ativa dos cidadãos nos processos eleitorais em Portugal. É composta por voluntários de várias partes do país e diferentes áreas profissionais."
      socialImage="/images/share/banner-PPT.jpg"
    />
    <LayoutHeader />
    <Layout.Content>
      <Hemicycle />
    </Layout.Content>
  </Layout>
)

export default Parlament;
