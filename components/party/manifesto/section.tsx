import { Popover } from "antd";
import React, { Fragment } from "react";
import ReactHtmlParser from "react-html-parser";
import { Section, Topic } from "../../../src/dtos/manifesto-dto";

interface ManifestoSectionProps {
  title: string,
  section: Section | null,
  subSectionPosition: number | null
}

// const onClickTwitterShare = (e) => {
//   const hashtags = '\n\n #politicaparatodos www.politicaparatodos.pt';
//   e.preventDefault();
// const text = `${window.getSelection().toString()} ${hashtags}`;
// window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "Twitter", "height=285,width=550,resizable=1");
// e.stopPropagation();
// }

const ManifestoSection = ({ title, section, subSectionPosition }: ManifestoSectionProps) => {

  const isSubSection = () => section?.subSections ?? false;
  const renderedTitle = () => isSubSection() ? section?.subSections![subSectionPosition!].title : section?.title;

  const renderSectionItem = (topic: Topic) =>
    <Fragment key={topic.position}>
      {ReactHtmlParser(topic.html)}
    </Fragment>

  const renderSectionContent = (section: Section | null, subSectionPosition: number | null) => {
    if (isSubSection()) {
      return section?.subSections![subSectionPosition!].topics.map(topic => renderSectionItem(topic));
    }
    if (section) {
      if (section.topics) {
        return section.topics?.map(topic => renderSectionItem(topic));
      }
    }
    return null;
  }

  const sectionContentRef = () => React.createRef();

  return (
    <section className="party-manifesto-body">
      <h1 className="party-manifesto-body__title">{title}</h1>
      {section !== null && (
        <div>
          <h2>{renderedTitle()}</h2>
          < div
            ref={sectionContentRef}
            className="party-manifesto-body__content">
            {renderSectionContent(section, subSectionPosition)}
          </div>
          <Popover
            ref={sectionContentRef}
            className="party-manifesto__share-popover">
            {/* <div
               className="party-manifesto__share-popover-inner"
               onClick={(e) => onClickTwitterShare(e)}
             >
               <img src={twitter_icon} />
             </div> */}
          </Popover>
        </div>
      )}
    </section >
  );
};

export default ManifestoSection;
