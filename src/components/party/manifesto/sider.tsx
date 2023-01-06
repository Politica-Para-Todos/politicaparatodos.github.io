import React, { Fragment, useState } from "react";
import { Layout, Menu } from "antd";
import { Section, SubSection } from "../../../dtos/manifesto-dto";
import ManifestoSection from "./section";

interface ManifestoSiderProps {
  sections: Section[],
  title: string
}

const { Sider } = Layout;
const { SubMenu } = Menu;

const ManifestoSider = ({ sections, title }: ManifestoSiderProps) => {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  const onClickSection = (event: React.MouseEvent) => {
    const keyPath: string[] = event.keyPath;
    const sectionKey: number | null = keyPath[keyPath.length - 1].substring(8) as unknown as number;
    const subSectionKey: number = keyPath[0] as unknown as number - 1;

    console.log(keyPath);
    console.log(sectionKey);
    console.log(subSectionKey);

    if (subSectionKey == null) {
      setSelectedSection(sections[sectionKey]);
    } else {
      setSelectedSection(sections[sectionKey].subSections[subSectionKey]!);
    }
  }

  const renderSectionItems = () =>
    sections.map(section => {
      if (section.subSections) {
        return renderSubMenuItem(section);
      }
      return renderMenuItem(section.position, section.title ?? "FAILED");
    })

  const renderMenuItem = (position: number, title: string) =>
    <Menu.Item key={position} className={`section-${position}`} onClick={onClickSection}>
      {title}
    </Menu.Item>

  const renderSubMenuItem = (section: Section) =>
    <SubMenu
      key={section.position}
      title={section.title}
      className={`section-mobile-${section.position}`}
    >
      {renderSubSectionItems(section.subSections)}
    </SubMenu>

  const renderSubSectionItems = (subSections: SubSection[]) =>
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
            {/* <SubMenu
              key="mobile-menu"
              title="Capítulos"
              className="section-mobile__chapter"
            >
              {renderSectionItems()}
            </SubMenu> */}
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
