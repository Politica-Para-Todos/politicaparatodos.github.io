import { Popover } from "antd";
import React, { Fragment } from "react";
import ReactHtmlParser from "react-html-parser";

// const onClickTwitterShare = (e) => {
//   const hashtags = '\n\n #politicaparatodos www.politicaparatodos.pt';
//   e.preventDefault();
// const text = `${window.getSelection().toString()} ${hashtags}`;
// window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "Twitter", "height=285,width=550,resizable=1");
// e.stopPropagation();
// }

const renderSectionItem = (item: any) => (
  <Fragment key={item.id}>{ReactHtmlParser(item.content)}</Fragment>
);

const renderSectionContent = (section: any) => {
  if (!section.id || !section) {
    return null;
  }
  return section.items.map((item: any) => renderSectionItem(item));
};

const renderSectionTitle = (section: any) => {
  if (!section) {
    return null;
  }
  return <h2>{section.title}</h2>;
};

const ManifestoSection = (props: any) => {
  const sectionContentRef = React.createRef();
  const { title } = props;

  return (
    <div>Hello world</div>
    // <section className="party-manifesto-body">
    //   <h1 className="party-manifesto-body__title">{title}</h1>
    //   {renderSectionTitle(null)}
    //   <div
    //     ref={sectionContentRef}
    //     className="party-manifesto-body__content">
    //     {renderSectionContent(null)}
    //   </div>
    //   <Popover
    //     selectionRef={sectionContentRef}
    //     className="party-manifesto__share-popover">
    //     <div className="party-manifesto__share-popover-inner"
    //       onClick={(e) => onClickTwitterShare(e)}>
    //       <img src={'/twitter_icon.svg'} />
    //     </div>
    //   </Popover>
    // </section>
  );
};

export default ManifestoSection;
