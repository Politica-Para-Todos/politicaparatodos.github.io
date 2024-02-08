import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

export const metadata = {
  title: 'Debates Legislativas',
  description: 'A comunidade Política Para Todos nasceu no verão de 2019 com o objetivo de promover a participação ativa dos cidadãos nos processos eleitorais em Portugal. É composta por voluntários de várias partes do país e diferentes áreas profissionais.'
}

const DebatesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Content>
        {children}
      </Content>
    </Layout>
  )
}

export default DebatesLayout;
