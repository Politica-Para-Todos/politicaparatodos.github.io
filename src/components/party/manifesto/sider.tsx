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
  const [selectedSection, setSelectedSection] = useState<{ section: Section | null, subSectionPosition: number | null }>({
    section: null,
    subSectionPosition: null
  });

  const onClickSection = (event: any) => {
    const keyPath: string[] = event.keyPath;
    const getSectionMenuKey = (position: number) =>
      +keyPath[position].split('-')[1];

    if (keyPath.length > 1) {
      const sectionMenuKey: number = getSectionMenuKey(1);
      const subSectionMenuKey: number = +keyPath[0] - 1;
      setSelectedSection({
        section: sections[sectionMenuKey],
        subSectionPosition: subSectionMenuKey
      });
    } else {
      const sectionMenuKey: number = getSectionMenuKey(0);
      setSelectedSection({
        section: sections[sectionMenuKey],
        subSectionPosition: null
      });
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
      {renderSubSectionItems(section.subSections!)}
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
            {renderSectionItems()}
          </Menu >
        </Fragment>
      </Sider>
      <Layout.Content>
        <ManifestoSection title={title} section={selectedSection.section} subSectionPosition={selectedSection.subSectionPosition} />
      </Layout.Content>
    </Layout >
  );
}

export default ManifestoSider;
