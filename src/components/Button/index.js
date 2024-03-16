import htmlToElement from "../../utils/htmlToElement";
import ButtonHTML from "./index.html";

import "./button.scss";

const Button = ({ imgPath, className, text, alt }) => {
  const buttonElement = htmlToElement(ButtonHTML);
  buttonElement.classList.add(className);

  const btnImg = buttonElement.querySelector(".button__img");
  const ImgEl = document.createElement("img");
  ImgEl.src = imgPath;
  ImgEl.alt = alt;

  const spanEl = document.createElement("span");
  spanEl.textContent = text;
  btnImg.append(ImgEl);
  buttonElement.append(spanEl);

  return buttonElement;
};

export default Button;
