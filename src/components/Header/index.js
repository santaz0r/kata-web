import htmlToElement from "../../utils/htmlToElement";
import Header from "./index.html";
import Button from "../Button";
import icons from "../../assets";
import Logo from "../Logo";
import renderFeedback from "../../js/renderFeedback";

import "./header.scss";
import TextField from "../Form/TextField";
import toggleOverlay from "../../utils/toggleOverlay";

const HeaderEl = () => {
  const header = htmlToElement(Header);
  const headerWrapper = header.querySelector(".header__wrapper");

  for (let i = 0; i < 3; i++) {
    const headerItemEl = document.createElement("div");
    headerItemEl.className = "header__item";
    headerWrapper.append(headerItemEl);
  }

  const inputName = TextField({
    placeholder: "Имя",
    type: "text",
  });
  const inputPhone = TextField({
    placeholder: "Телефон",
    type: "tel",
  });
  const inputPhoneSecond = TextField({
    placeholder: "Телефон",
    type: "tel",
  });
  const inputEmail = TextField({
    placeholder: "Электронная почта",
    type: "email",
  });
  const inputMessage = TextField({
    placeholder: "Сообщение",
    type: "textarea",
  });

  const handleClickFeedback = () => {
    toggleOverlay({
      modalClass: "modal",
      modalFormClass: "modal__form",
      title: "Заказать звонок",
      inputs: [inputName, inputPhone, inputEmail, inputMessage],
    });
  };

  const handleClickPhone = () => {
    toggleOverlay({
      modalClass: "modal",
      modalFormClass: "modal__form",
      title: "Заказать звонок",
      inputs: [inputPhoneSecond],
    });
  };

  const openMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("opened");
  };

  const headerItem = headerWrapper.querySelectorAll(".header__item");

  const burgerIconBtn = Button({
    imgPath: icons.burger,
    className: "header__button",
    alt: "burger-icon",
    text: "",
    onClick: openMenu,
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
