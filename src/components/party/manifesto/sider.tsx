import React, { Fragment } from "react";
import { Menu } from "antd";
import Media from "react-media";
import { Section, SubSection } from "../../../dtos/manifesto-dto";
import Link from "next/link";

interface ManifestoSiderProps {
  sections: Section[],
  selectedKey: any,
  openKey: any
}

const { SubMenu } = Menu;

const ManifestoSider = ({ sections, selectedKey, openKey }: ManifestoSiderProps) => {

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
    <Fragment>
      <Media query="(max-width: 768px)" render={() => (
        <Menu
          mode="inline"
          defaultSelectedKeys={selectedKey}
          defaultOpenKeys={openKey}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="mobile-menu"
            title="Capítulos"
            className="section-mobile__chapter"
          >
            {renderSectionItems()}
          </SubMenu>
        </Menu>
      )} />
      <Media query="(min-width: 769px)" render={() => (
        <Menu
          mode="inline"
          // TODO: selectedKeys
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["1"]}
          style={{ height: '100%', borderRight: 0 }}
        >
          {renderSectionItems()}
        </Menu>
      )} />
    </Fragment>
  );
}

export default ManifestoSider;
