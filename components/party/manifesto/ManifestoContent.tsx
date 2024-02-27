import { Popover } from "antd";
import { createRef } from "react";
import HtmlParser from "react-html-parser";
import SectionTitle from "./SectionTitle";

interface ManifestoContentProps {
  title: string,
  section: string[]
}

const ManifestoContent = ({ title, section }: ManifestoContentProps) => {
  const noTitleOnContent = section.filter((element, index) => index !== 0);

  const renderSectionContent = (section: string[]) => {
    if (section.length > 1) {
      return section.map((element: string) => (<>{HtmlParser(element)}</>));
    }
    return null;
  }

  const sectionContentRef = () => createRef();

  return (
    <section className="party-manifesto-body">
      <div>
        <SectionTitle title={title} />
        <div
          ref={sectionContentRef}
          className='party-manifesto-body__content'
        >
          {renderSectionContent(noTitleOnContent)}
        </div>
        <Popover
          ref={sectionContentRef}
          className="party-manifesto__share-popover">
        </Popover>
      </div>
    </section >
  );
};

export default ManifestoContent;
