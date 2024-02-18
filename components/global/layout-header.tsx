import { Button, Col, Drawer, Layout, Menu, Row } from "antd";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Image from "next/image";
import Link from "next/link";
import { Fragment, memo, useState } from "react";
import { LOOMIO_PPT_URL } from "../../src/utils/constants";
import { pptOnlinePlatforms } from "../../src/utils/online-platform";
import { HeaderLogo } from "./logos";
import SocialSharing from "./social-sharing";

const LayoutHeader = () => {
  const [headerState, setState] = useState({
    visible: false,
  });

  const componentDidMount = () => {
    updateMenuVisibility();
    //window.addEventListener('resize', updateMenuVisibility().bind(this));
  };

  const closeDrawer = () => {
    setState({
      visible: false,
    });
    enableBodyScroll(document.querySelector(".header__mobile-menu ul")!);
  };

  const showDrawer = () => {
    setState({
      visible: true,
    });
    disableBodyScroll(document.querySelector(".header__mobile-menu ul")!);
  };

  const updateMenuVisibility = () => {
    if (window.innerWidth >= 992) {
      setState({
        visible: false,
      });
      enableBodyScroll(document.querySelector(".header__mobile-menu ul")!);
    }
  };

  return (
    <Fragment>
      <Layout.Header className="header">
        <Row justify="space-between" align="middle" typeof="flex">
          <Col span={24} lg={24}>
            <Link href="/">
              <HeaderLogo />
            </Link>

            <Button
              className={
                "header__mobile-burger" +
                (headerState.visible ? " header__mobile-burger--open" : "")
              }
              type="primary"
              onClick={showDrawer}
            >
              <Image
                className="header__mobile-burger"
                src="/burger.svg"
                height={25}
                width={25}
                alt="burger menu"
              />
            </Button>

            <nav className="header__desktop-menu">
              <Menu mode="horizontal">
                <Menu.Item key={1}>
                  <Link href="/" onClick={closeDrawer}>
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item key={2}>
                  <Link href="/#parties-section" style={{ scrollBehavior: "smooth" }} onClick={closeDrawer}>
                    Partidos
                  </Link>
                </Menu.Item>
                <Menu.Item key={3}>
                  <Link href="/debates-2024" onClick={closeDrawer}>
                    Debates 2024
                  </Link>
                </Menu.Item>
                <Menu.Item key={4}>
                  <Link href="/quem-somos" onClick={closeDrawer}>
                    Quem Somos
                  </Link>
                </Menu.Item>
              </Menu>
              <a
                className="header-join-us"
                href={LOOMIO_PPT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >Junta-te a Nós!
              </a>
              <div className="header-social-media">
                <SocialSharing onlinePlatforms={pptOnlinePlatforms} />
              </div>
            </nav>
          </Col>
        </Row>
        <Drawer
          className="header__mobile-menu"
          placement="right"
          closable={false}
          onClose={closeDrawer}
          open={headerState.visible}
          getContainer={false}
          style={{ position: "absolute" }}
        >
          <Menu mode="vertical">
            <Menu.Item>
              <Link href="/" onClick={closeDrawer}>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/#parties-section" onClick={closeDrawer}>
                Partidos
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/debates-2024" onClick={closeDrawer}>
                Debates 2024
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/about-us" onClick={closeDrawer}>
                Quem Somos
              </Link>
            </Menu.Item>
          </Menu>
          <a
            className="header-join-us"
            href={LOOMIO_PPT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >Junta-te a Nós!</a>
          <div className="header-social-media">
            <SocialSharing onlinePlatforms={pptOnlinePlatforms} theme="#666" />
          </div>
        </Drawer>
      </Layout.Header>
    </Fragment >
  );
};

// componentDidMount() {
//   this.updateMenuVisibility();
//   this.targetElement = document.querySelector('.header__mobile-menu ul');
//   window.addEventListener("resize", this.updateMenuVisibility.bind(this));
// }

// componentWillUnmount() {
//   window.removeEventListener("resize", this.updateMenuVisibility.bind(this));
// }

export default memo(LayoutHeader);
