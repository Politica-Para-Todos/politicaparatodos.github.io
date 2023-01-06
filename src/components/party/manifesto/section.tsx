import { Popover } from "antd";
import React, { Fragment, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { Section, Topic } from "../../../dtos/manifesto-dto";

interface ManifestoSectionProps {
  title: string,
  section: Section | null
}

// const onClickTwitterShare = (e) => {
//   const hashtags = '\n\n #politicaparatodos www.politicaparatodos.pt';
//   e.preventDefault();
// const text = `${window.getSelection().toString()} ${hashtags}`;
// window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "Twitter", "height=285,width=550,resizable=1");
// e.stopPropagation();
// }

const ManifestoSection = ({ title, section }: ManifestoSectionProps) => {

  const renderSectionItem = (topic: Topic) =>
    <Fragment key={topic.position}>
      {ReactHtmlParser(topic.html)}
    </Fragment>

  const renderSectionContent = (section: Section) => {
    if (section.subSections) {
      section.subSections.forEach(subSection => {
        if (subSection.topics) {
          const result = subSection.topics.map(topic => renderSectionItem(topic));
          console.log(result);
          return result;
        }
      });
    }
    else if (section.topics) {
      const result = section.topics.map(topic => renderSectionItem(topic));
      console.log(result);
      return result;
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
