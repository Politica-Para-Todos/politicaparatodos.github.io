import { NextPage } from "next";
import { Layout } from 'antd';
import LayoutHeader from "../src/components/layout-header";
import MetaTags from "../src/components/meta-tags";
import Hemicycle from "../src/components/parlament/hemicycle";
import { ObjectMapper } from "jackson-js";
import { Legislature } from "../src/dtos/base-info";

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

  const baseInfoResponse = await fetch('https://app.parlamento.pt/webutils/docs/doc.txt?path=6148523063446f764c324679626d56304c3239775a57356b595852684c3052685a47397a51574a6c636e52766379394a626d5a76636d3168773666446f32386c4d6a424359584e6c4c3168574a5449775447566e61584e7359585231636d45765357356d62334a7459574e6862304a6863325659566c3971633239754c6e523464413d3d&fich=InformacaoBaseXV_json.txt&Inline=true')
    .then(response => response.json());

  // const deputyActivitiesResponse = await fetch('https://app.parlamento.pt/webutils/docs/doc.txt?path=6148523063446f764c324679626d56304c3239775a57356b595852684c3052685a47397a51574a6c636e52766379394264476c32615752685a47556c4d6a426b62334d6c4d6a42455a5842316447466b62334d765746596c4d6a424d5a57647063327868644856795953394264476c32615752685a4756455a5842316447466b623168575832707a6232347564486830&fich=AtividadeDeputadoXV_json.txt&Inline=true')
  //   .then(response => response.json());

  if (!baseInfoResponse) {
    return {
      props: {
        error: 'No data.'
      }
    };
  }

  return {
    props: {
      baseInfoResponse
    }
  }
}

export default Parlament;
