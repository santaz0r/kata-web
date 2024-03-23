import htmlToElement from "../../utils/htmlToElement";
import AccordionHTML from "./index.html";

import "./accordion.scss";

const Accordion = ({ imgPath, className, text, alt }) => {
  const accordionElement = htmlToElement(AccordionHTML);
  accordionElement.classList.add(className);

  const ImgEl = document.createElement("img");
  ImgEl.src = imgPath;
  ImgEl.alt = alt;

  const description = document.createElement("div");
  description.classList.add("accordion__text");
  description.textContent = text;

  accordionElement.append(ImgEl, description);

  return accordionElement;
};

export default Accordion;
