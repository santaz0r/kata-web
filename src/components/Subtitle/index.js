import icons from "../../assets";
import htmlToElement from "../../utils/htmlToElement";
import Button from "../Button";
import subtitleHTML from "./index.html";

import "./subtitle.scss";

const Subtitle = ({ className, text }) => {
  const subtitleElement = htmlToElement(subtitleHTML);
  subtitleElement.classList.add(className);

  const h2Element = document.createElement("h2");
  h2Element.textContent = text;
  h2Element.className = "subtitle__text";

  const subtitleBtns = document.createElement("div");
  subtitleBtns.className = "subtitle__buttons";

  const repairBtn = Button({
    imgPath: icons.repair,
    className: "subtitle__button",
    alt: "repair-icon",
    text: "Оставить заявку",
  });

  const checkBtn = Button({
    imgPath: icons.check,
    className: "subtitle__button",
    alt: "repair-icon",
    text: "Статус ремонта",
  });

  subtitleElement.append(h2Element);
  subtitleBtns.append(repairBtn, checkBtn);
  subtitleElement.append(subtitleBtns);
  return subtitleElement;
};

export default Subtitle;
