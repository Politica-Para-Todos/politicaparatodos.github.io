import React, { Fragment, useState } from "react";
import { Layout, Menu } from "antd";
import { Section, SubSection } from "../../../dtos/manifesto-dto";
import ManifestoSection from "./section";
import Sider from "antd/lib/layout/Sider";

interface ManifestoSiderProps {
  sections: Section[],
  title: string
}

const { SubMenu } = Menu;

const ManifestoSider = ({ sections, title }: ManifestoSiderProps) => {
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const onClickSection = (event: React.MouseEvent) => {
    const key = event.key.substring(event.key.length - 1);
    setSelectedSection(sections[key]);
  }

  const renderSectionTitles = () =>
    sections.map(section => {
      return (
        <Menu.Item key={section.position} onClick={onClickSection}>
          {section.title}
        </Menu.Item>
      )
    })

  const renderSectionItems = () =>
    sections.map(section => {
      if (section.subSections) {
        <SubMenu
          key={section.position}
          title={section.title}
          className={`section-mobile-${section.position}`}
        >
          {renderSubSectionItems(section.subSections)}
        </SubMenu>
      } else {
        return renderMenuItem(section.position, section.title ?? "FAILED");
      }
    })

  const renderMenuItem = (position: number, title: string) =>
    <Menu.Item key={position} className={`section-${position}`}>
      {/* should render the manifesto section body */}
      {title}
    </Menu.Item>

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
            {renderSectionTitles()}
          </Menu >
        </Fragment>
      </Sider>
      <Layout.Content>
        <ManifestoSection title={title} section={selectedSection} />
      </Layout.Content>
    </Layout>
  );
}

export default ManifestoSider;
