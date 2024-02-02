import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Layout } from 'antd';
import React from 'react';
import LayoutHeader from './components/header/LayoutHeader';
import './styles/index.scss';

export const metadata = {
  title: 'PPT - Eleições',
  description: 'Eleições portuguesas',
}

const RootLayout = ({ children }: React.PropsWithChildren) =>
  <html lang="en">
    <body>
      <AntdRegistry>
        <Layout>
          <LayoutHeader />
          {children}
        </Layout>
      </AntdRegistry>
    </body >
  </html >

export default RootLayout;
