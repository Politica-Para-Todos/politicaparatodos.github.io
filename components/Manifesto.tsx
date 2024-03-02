import { Layout, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import SubMenu from "antd/lib/menu/SubMenu";
import { Fragment, useState } from "react";
import HtmlParser from "react-html-parser";
import ManifestoContent from "./party/manifesto/ManifestoContent";

interface ManifestoProps {
  manifesto: Record<string, string[]>
}

const Manifesto = ({ manifesto }: ManifestoProps) => {
  const manifestoKeys = Object.keys(manifesto);
  console.log(manifestoKeys);
  const firstManifestoElement = manifesto[manifestoKeys[0]][0];
  console.log(manifesto[manifestoKeys[1]][0]);

  const [selectedSection, setSelectedSection] = useState({
    title: isManifestoTitle(firstManifestoElement) ? firstManifestoElement : '',
    content: isManifestoTitle(firstManifestoElement) ? manifesto[manifestoKeys[0]] : ['']
  })

  const manifestoTopics = manifestoKeys.map((key, index) => ({
    index,
    title: manifesto[key][0]
  }))

  const onClickSection = (event: any) => {
    const keyPath: string[] = event.keyPath;
    const getMenuKey = (position: number) => +keyPath[position] - 1;
    const menuItem = event.key;

    if (keyPath.length > 1) {
      const sectionMenuKey: number = getMenuKey(1);
      const subSectionMenuKey: number = getMenuKey(0);
      setSelectedSection({
        title: manifesto[manifestoTopics[sectionMenuKey].title][0],
        content: manifesto[manifestoTopics[sectionMenuKey].title]
      });
    } else {
      // const sectionMenuKey: number = getMenuKey(0);
      setSelectedSection({
        title: manifesto[manifestoKeys[menuItem]][0],
        content: manifesto[manifestoKeys[menuItem]]
      });
    }
  }

  return (
    <Layout>
      <Sider width={400} className="party-manifesto-sider">
        <Fragment>
          <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
          >
            {manifestoTopics.map(topic => {
              if (isManifestoTitle(topic.title)) {
                return (
                  <Menu.Item key={topic.index} className={`section-${topic.index}`} onClick={onClickSection}>
                    Introdução
                  </Menu.Item>
                )
              }
              if (topic.title.startsWith('<h2')) {
                return (
                  <Menu.Item key={topic.index} className={`section-${topic.index}`} onClick={onClickSection}>
                    <>{HtmlParser(topic.title)[0].props.children[0]}</>
                  </Menu.Item>
                )
              } else if (topic.title.startsWith('<h3')) {
                <SubMenu
                  key={topic.index}
                  title={topic.title}
                  className={`section-mobile-${topic.index}`}
                >
                </SubMenu>
              }
              else {

              }
            })}
          </Menu >
        </Fragment>
      </Sider>
      <Layout.Content>
        <ManifestoContent title={selectedSection.title} section={selectedSection.content} />
      </Layout.Content>
    </Layout>
  )
}

export default Manifesto;

const isManifestoTitle = (htmlElement: string) => htmlElement.startsWith('<h1');
