import { NextPage } from "next";
import { Layout } from 'antd';
import LayoutHeader from "../src/components/layout-header";
import MetaTags from "../src/components/meta-tags";
import Hemicycle from "../src/components/parlament/hemicycle";
import { BASE_INFO_ENDPOINT, DEPUTY_ACTIVITIES_ENDPOINT, Legislature } from "../src/utils/parlamento-api";

const Parlament: NextPage = (props: any) => (
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
      <Hemicycle {...props}/>
    </Layout.Content>
  </Layout>
)

export const getStaticProps = async () => {

  // const baseInfoResponse = await fetch(BASE_INFO_ENDPOINT(Legislature.Current))
  //   .then(response => response.json());

  const deputyActivitiesResponse = await fetch(DEPUTY_ACTIVITIES_ENDPOINT(Legislature.Current))
    .then(response => response.json());

  if (!deputyActivitiesResponse) {
    return {
      props: {
        error: 'One of the parlamento resources failed to respond.'
      }
    };
  }

  return {
    props: {
      // baseInfoResponse,
      deputyActivitiesResponse
    }
  }
}

export default Parlament;
