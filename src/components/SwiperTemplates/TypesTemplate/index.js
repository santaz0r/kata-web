import htmlToElement from "../../../utils/htmlToElement";
import typesHTML from "./index.html";

import "./types.scss";

const TypesTemplate = () => {
  const element = htmlToElement(typesHTML);
  return element;
};

export default TypesTemplate;
