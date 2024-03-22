import htmlToElement from "../../utils/htmlToElement";
import Header from "./index.html";
import Button from "../Button";
import icons from "../../assets";
import Logo from "../Logo";
import renderFeedback from "../../js/renderFeedback";
import {
  inputEmail,
  inputMessage,
  inputName,
  inputPhone,
} from "../../data/inputs";

import "./header.scss";

const HeaderEl = () => {
  const header = htmlToElement(Header);
  const headerWrapper = header.querySelector(".header__wrapper");

  for (let i = 0; i < 3; i++) {
    const headerItemEl = document.createElement("div");
    headerItemEl.className = "header__item";
    headerWrapper.append(headerItemEl);
  }

  const handleClickFeedback = () => {
    const modal = document.querySelector(".modal");
    const formElement = modal.querySelector(".modal__form");
    if (formElement) formElement.remove();
    renderFeedback({
      title: "Обратная связь",
      inputs: [inputName, inputPhone, inputEmail, inputMessage],
    });

    modal.classList.toggle("opened");
  };

  const handleClickPhone = () => {
    const modal = document.querySelector(".modal");
    const formElement = modal.querySelector(".modal__form");
    if (formElement) formElement.remove();
    renderFeedback({
      title: "Заказать звонок",
      inputs: [inputPhone],
    });

    modal.classList.toggle("opened");
  };

  const headerItem = headerWrapper.querySelectorAll(".header__item");

  const burgerIconBtn = Button({
    imgPath: icons.burger,
    className: "header__button",
    alt: "burger-icon",
    text: "",
  });

  const phoneBtn = Button({
    imgPath: icons.phone,
    className: "header__button",
    alt: "phone-icon",
    text: "",
    onClick: handleClickFeedback,
  });

  const messageBtn = Button({
    imgPath: icons.message,
    className: "header__button",
    alt: "message-icon",
    text: "",
    onClick: handleClickPhone,
  });

  const repairBtn = Button({
    imgPath: icons.repair,
    className: "header__button",
    alt: "repair-icon",
    text: "",
  });

  const checkBtn = Button({
    imgPath: icons.check,
    className: "header__button",
    alt: "check-icon",
    text: "",
  });

  const logo = Logo({ className: "header__logo", imgPath: icons.logo });

  const btnsWrapper = document.createElement("div");
  btnsWrapper.append(phoneBtn, messageBtn);
  btnsWrapper.className = "buttons__wrapper";

  headerItem[0].append(burgerIconBtn);
  headerItem[1].append(logo, btnsWrapper);
  headerItem[2].append(repairBtn, checkBtn);
  return header;
};

export default HeaderEl();
