import { Layout } from 'antd';
import React from 'react';
import '../styles/index.scss';

export const metadata = {
  title: 'Partido - X',
  description: 'Eleições Legislativas',
}

const PartyLayout = ({ children }: React.PropsWithChildren) =>
  <html lang="en">
    <body>
      <Layout>
        <Content className='party-section'>
          {children}
        </Content>
      </Layout>
    </body >
  </html >

export default PartyLayout;
