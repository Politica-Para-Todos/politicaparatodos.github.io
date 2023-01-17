import { Layout, Menu } from "antd";
import { Fragment, useState } from "react";
import ManifestoSection from "./section";

interface ManifestoSiderProps {
  sections: any,
  title: string
}

const { Sider } = Layout;
const { SubMenu } = Menu;

const ManifestoSider = ({ sections, title }: ManifestoSiderProps) => {
  const [selectedSection, setSelectedSection] = useState(null);

  const onClickSection = (event: any) => {
    console.log(event);
    const keyPath: string[] = event.keyPath;
    const getMenuKey = (position: number) => +keyPath[position] - 1;

    if (keyPath.length > 1) {
      const sectionMenuKey: number = getMenuKey(1);
      const subSectionMenuKey: number = getMenuKey(0);
      setSelectedSection(sections[sectionMenuKey].content[subSectionMenuKey]);
    } else {
      const sectionMenuKey: number = getMenuKey(0);
      setSelectedSection(sections[sectionMenuKey]);
    }
  }

  const renderSectionItems = () =>
    sections.map((section: any) => {
      if (section.content[0].content) {
        return renderSubMenuItem(section);
      }
      return renderMenuItem(section.position, section.title);
    })

  const renderMenuItem = (position: number, title: string) =>
    <Menu.Item key={position} className={`section-${position}`} onClick={onClickSection}>
      {title}
    </Menu.Item>

  const renderSubMenuItem = (section: any) =>
    <SubMenu
      key={section.position}
      title={section.title}
      className={`section-mobile-${section.position}`}
    >
      {renderSubSectionItems(section.content!)}
    </SubMenu>

  const renderSubSectionItems = (subSections: any[]) =>
    subSections.map(subSection =>
      renderMenuItem(subSection.position, subSection.title)
    )

  return (
    <Layout>
      <Sider width={400} className="party-manifesto-sider">
        <Fragment>
          <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
          >
            {renderSectionItems()}
          </Menu >
        </Fragment>
      </Sider>
      <Layout.Content>
        <ManifestoSection title={title} section={selectedSection} />
      </Layout.Content>
    </Layout >
  );
}

export default ManifestoSider;
