import { Button, Col, Drawer, Layout, Menu, Row } from "antd"
import Link from "next/link";
import React, { Fragment, memo, useState } from "react"
import SocialSharing from "./social-sharing";
import { socialMediaOptions } from '../utils/media-platform';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const LayoutHeader = () => {

  const [headerState, setState] = useState({
    visible: false
  });

  const componentDidMount = () => {
    updateMenuVisibility();
    //window.addEventListener('resize', updateMenuVisibility().bind(this));
  }

  const closeDrawer = () => {
    setState({
      visible: false
    });
    enableBodyScroll(document.querySelector('.header__mobile-menu ul')!);
  };

  const showDrawer = () => {
    setState({
      visible: true,
    });
    disableBodyScroll(document.querySelector('.header__mobile-menu ul')!);
  };

  const updateMenuVisibility = () => {
    if (window.innerWidth >= 992) {
      setState({
        visible: false,
      });
      enableBodyScroll(document.querySelector('.header__mobile-menu ul')!);
    }
  };

  return (
    <Fragment>
      <Layout.Header className="header">
        <Row justify='space-between' align='middle' typeof="flex">
          <Col span={24} lg={24}>
            <Link href="/">
              <img src='horizontal_logo.svg' alt='header logo' className='header_logo' />
            </Link>

            <Button
              className={'header__mobile-burger' + (headerState.visible ? ' header__mobile-burger--open' : '')}
              type='primary'
              onClick={showDrawer}
            >
              <img className='header__mobile-burger' src='burger.svg' alt='burger menu' />
            </Button>

            <nav className='header__desktop-menu'>
              <Menu mode="horizontal">
                <Menu.Item key={1}>
                  <Link href='/' passHref>
                    <a onClick={closeDrawer}>
                      Home
                    </a>
                    {/* <MenuTitle>Home</MenuTitle> */}
                  </Link>
                </Menu.Item>
                <Menu.Item key={2}>
                  <Link href='/' passHref>
                    <a onClick={closeDrawer}>
                      Partidos
                    </a>
                  </Link>
                </Menu.Item>
                {/* <Menu.Item key={3}>
                  <Link href='/' onClick={closeDrawer}>Parlamento</Link>
                </Menu.Item> */}
                <Menu.Item key={4}>
                  <Link href='/' passHref>
                    <a onClick={closeDrawer}>
                      Debates 2022
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item key={5}>
                  <Link href='/about-us'>
                    <a onClick={closeDrawer}>
                      Quem Somos
                    </a>
                  </Link>
                </Menu.Item>
              </Menu>
              <a
                className='header-join-us'
                href='https://www.loomio.org/g/ZqT2uPv6/politica-para-todos'
                target='_blank'
                rel='noopener noreferrer'
              >
                Junta-te a Nós!
              </a>
              <div className="header-social-media">
                <SocialSharing socialMediaList={socialMediaOptions} theme={''} />
              </div>
            </nav>

          </Col>
        </Row>
        <Drawer
          className="header__mobile-menu"
          placement="right"
          closable={false}
          onClose={closeDrawer}
          visible={headerState.visible}
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

// componentDidMount() {
//   this.updateMenuVisibility();
//   this.targetElement = document.querySelector('.header__mobile-menu ul');
//   window.addEventListener("resize", this.updateMenuVisibility.bind(this));
// }

// componentWillUnmount() {
//   window.removeEventListener("resize", this.updateMenuVisibility.bind(this));
// }

export default memo(LayoutHeader);
