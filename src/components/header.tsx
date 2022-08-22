import { Button, Col, Drawer, Layout, Menu, Row } from "antd"
import Link from "next/link";
import { Fragment, memo, useState } from "react"
import SocialSharing from "./social-sharing";
import { socialMediaOptions } from '../utils/media-platform';
import Image from "next/image";
import BurgerImage from '../../public/burger.svg';

const closeDrawer = () => { return null };

const Header = () => {

  const [state] = useState({
    visible: false
  });

  return (
    <Fragment>
      <Layout.Header className="header">
        <Row justify='space-between' align='middle' typeof="flex">
          <Col span={24} lg={24}>
            <Link href="/">
              <img src='horizontal_logo.svg' alt='header logo' className='header_logo' />
            </Link>

            <Button className="header__mobile-burger">
              <Image alt="header_logo" src={BurgerImage} />
            </Button>

            <nav className='header__desktop-menu'>
              <Menu mode="horizontal">
                <Menu.Item key={1}>
                  <Link href='/'>Home</Link>
                </Menu.Item>
                <Menu.Item key={2}>
                  <Link href='/'>Partidos</Link>
                </Menu.Item>
                {/* <Menu.Item key={3}>
                  <Link href='/'>Parlamento</Link>
                </Menu.Item> */}
                <Menu.Item key={4}>
                  <Link href='/'>Debates 2022</Link>
                </Menu.Item>
                <Menu.Item key={5}>
                  <Link href='/quem-somos'>Quem Somos</Link>
                </Menu.Item>
              </Menu>
              <a
                className='header-join-us'
                href='https://www.loomio.org/g/ZqT2uPv6/politica-para-todos'
                target='_blank'
                rel='noopener noreferrer'
              >
                Junta-te a Nós
              </a>
              <div className="header-social-media">
                <SocialSharing socialMediaList={socialMediaOptions} theme='' />
              </div>
            </nav>

          </Col>
        </Row>
        <Drawer
          className="header__mobile-menu"
          placement="right"
          closable={false}
          onClose={closeDrawer}
          visible={state.visible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <Menu mode="vertical">
            <Menu.Item>
              <Link href="/" onClick={closeDrawer}>Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/#parties-section" onClick={closeDrawer}>Partidos</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/debates-2022" onClick={closeDrawer}>Debates 2022</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/about-us" onClick={closeDrawer}>Quem Somos</Link>
            </Menu.Item>
          </Menu>
          <a
            className="header-join-us"
            href="https://www.loomio.org/g/ZqT2uPv6/politica-para-todos"
            target="_blank"
            rel="noopener noreferrer"
          >Junta-te a Nós!</a>
          <div className="header-social-media">
            <SocialSharing socialMediaList={socialMediaOptions} theme="#666" />
          </div>
        </Drawer>
      </Layout.Header>
    </Fragment >
  )
}

export default memo(Header);
