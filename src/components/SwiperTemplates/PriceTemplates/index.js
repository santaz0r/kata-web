import htmlToElement from "../../../utils/htmlToElement";
import pricesHTML from "./index.html";

import "./prices.scss";

const PricesTemplate = () => {
  const element = htmlToElement(pricesHTML);
  return element;
};

export default PricesTemplate;
