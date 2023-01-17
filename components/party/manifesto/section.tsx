import { Popover } from "antd";
import React, { Fragment } from "react";
import ReactHtmlParser from "react-html-parser";

interface ManifestoSectionProps {
  title: string,
  section: any
}

const ManifestoSection = ({ title, section }: ManifestoSectionProps) => {

  const renderSectionItem = (element: any) =>
    <Fragment key={element.position}>
      {ReactHtmlParser(element.html)}
    </Fragment>

  const renderSectionContent = (section: any | null) => {
    if (section) {
      return section.content.map((element: any) => renderSectionItem(element));
    }
    return null;
  }

  const sectionContentRef = () => React.createRef();

  return (
    <section className="party-manifesto-body">
      <h1 className="party-manifesto-body__title">{title}</h1>
      {section !== null && (
        <div>
          <h2>{section.title}</h2>
          < div
            ref={sectionContentRef}
            className="party-manifesto-body__content">
            {renderSectionContent(section)}
          </div>
          <Popover
            ref={sectionContentRef}
            className="party-manifesto__share-popover">
          </Popover>
        </div>
      )}
    </section >
  );
};

export default ManifestoSection;
