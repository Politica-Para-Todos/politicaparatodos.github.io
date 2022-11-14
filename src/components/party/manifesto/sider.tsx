import React, { Fragment } from "react";
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import Media from 'react-media';
import { SubSection } from "../../../dtos/manifesto-dto";

const { SubMenu } = Menu;

const renderMenuItem = (id: string, title: string, party_acronym: string) => (
  <Menu.Item key={id} className={`section-${id}`}>
    <Link to={`/party/${party_acronym}/manifesto/${id}`}>{title}</Link>
  </Menu.Item>
);

const renderMenuSubitems = (subsections: SubSection[], party_acronym: string) => {
  if (!subsections) {
    return null;
  }

  return subsections.map(({ id, title }) => {
    return renderMenuItem(id, title, party_acronym);
  });
}

const renderMenuItems = (props: any) => {
  const { sections, party_acronym } = props;

  if (!sections) {
    return null;
  }

  return sections.map(section => {
    if (Array.isArray(section.subsections) && section.subsections.length > 0) {
      return (
        <SubMenu
          key={section.id}
          title={section.title}
          className={`section-mobile-${section.id}`}
        >
          {renderMenuSubitems(section.subsections, party_acronym)}
        </SubMenu>
      )
    } else {
      return renderMenuItem(section.id, section.title, party_acronym);
    }
  })
}

const ManifestoSider = (props: any) => {
  //   const { section_id, selectedKey, openKey } = this.props;

  const { selectedKey, openKey } = props;

  return (
    <div>
      Hello World !
    </div>
    // <Fragment>
    //   <Media query="(max-width: 768px)" render={() => (
    //     <Menu
    //       mode="inline"
    //       defaultSelectedKeys={selectedKey}
    //       defaultOpenKeys={openKey}
    //       style={{ height: '100%', borderRight: 0 }}
    //     >
    //       <SubMenu
    //         key="mobile-menu"
    //         title="Capítulos"
    //         className="section-mobile__chapter"
    //       >
    //         {renderMenuItems(props)}
    //       </SubMenu>
    //     </Menu>
    //   )} />
    //   <Media query="(min-width: 769px)" render={() => (
    //     <Menu
    //       mode="inline"
    //       defaultSelectedKeys={selectedKey}
    //       defaultOpenKeys={openKey}
    //       style={{ height: '100%', borderRight: 0 }}
    //     >
    //       {renderMenuItems(props)}
    //     </Menu>
    //   )} />
    // </Fragment>
  );
}

export default ManifestoSider;
