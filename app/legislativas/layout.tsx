import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, Layout } from 'antd';
import React from 'react';
import LayoutFooter from '../components/footer/LayoutFooter';
import LayoutHeader from '../components/header/LayoutHeader';
import '../styles/index.scss';

export const metadata = {
  title: 'PPT - Eleições',
  description: 'Eleições portuguesas',
}

const LegislativeLayout = ({ children }: React.PropsWithChildren) =>
  <html lang="en">
    <body>
      <AntdRegistry>
        <ConfigProvider theme={{ hashed: false }}>
          <Layout>
            <LayoutHeader />
            {children}
            <LayoutFooter />
          </Layout>
        </ConfigProvider>
      </AntdRegistry>
    </body >
  </html >

export default LegislativeLayout;
