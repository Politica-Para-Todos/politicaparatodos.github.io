import { Layout } from 'antd';
import React from 'react';
import LayoutHeader from './components/header/LayoutHeader';

export const metadata = {
  title: 'PPT - Eleições',
  description: 'Eleições portuguesas',
}

const RootLayout = ({ children }: React.PropsWithChildren) =>
  <html lang="en">
    <body>
      <Layout>
        <LayoutHeader />
        {children}
        {/* <AntdRegistry>
        </AntdRegistry> */}
      </Layout>
    </body >
  </html >

export default RootLayout;
