import htmlToElement from "../../../utils/htmlToElement";
import brandHTML from "./index.html";

import "./brands.scss";

const BrandsTemplate = () => {
  const element = htmlToElement(brandHTML);
  return element;
};

export default BrandsTemplate;
