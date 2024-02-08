import Col from "antd/es/col";
import { Header } from "antd/es/layout/layout";
import Row from "antd/es/row";
import Link from "next/link";
import { PPTLogo } from "../global/logos";
import SocialSharing from "../social/SocialSharing";
import MenuItems from "./MenuItems";

const LayoutHeader = () =>
  <>
    <Header className='header'>
      <Row justify='space-between' align='middle' typeof='flex'>
        <Col span={24} lg={24}>
          <Link href={''}>
            <PPTLogo />
          </Link>
          <nav className='header__desktop-menu'>
            <MenuItems />
            <a
              className='header-join-us'
              href={''} //LOOMIO_PPT_URL
              target='_blank'
              rel='noopener noreferrer'
            >Junta-te a nós !
            </a>
            <div className='header-social-media'>
              <SocialSharing />
            </div>
          </nav>
        </Col>
      </Row>
    </Header>
  </>

export default LayoutHeader;
