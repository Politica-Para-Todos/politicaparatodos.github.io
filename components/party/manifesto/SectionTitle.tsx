import { createElement } from "react";
import HtmlParser from "react-html-parser";

interface SectionTitleProps {
  title: string
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  const html = HtmlParser(title);
  const h1Element = createElement(
    html[0].type.toString(),
    { className: 'party-manifesto-body__title' },
    html[0].props.children[0]
  );

  return (<>{h1Element}</>)
}

export default SectionTitle;
