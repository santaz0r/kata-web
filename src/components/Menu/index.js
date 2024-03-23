import icons from "../../assets";
import renderFeedback from "../../js/renderFeedback";
import htmlToElement from "../../utils/htmlToElement";
import toggleOverlay from "../../utils/toggleOverlay";
import Button from "../Button";
import TextField from "../Form/TextField";
import MenuHTML from "./index.html";

import "./menu.scss";

const Menu = () => {
  const element = htmlToElement(MenuHTML);
  const menuWrapper = element.querySelector(".menu__wrapper");
  const closeBtn = element.querySelectorAll(".menu__button")[0];
  const footerBtnsWrapper = element.querySelectorAll(".menu__item")[2];

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

    toggleClassMenu();
  };

  const handleClickPhone = () => {
    toggleOverlay({
      modalClass: "modal",
      modalFormClass: "modal__form",
      title: "Заказать звонок",
      inputs: [inputPhoneSecond],
    });

    toggleClassMenu();
  };

  const toggleClassMenu = () => {
    element.classList.toggle("opened");
  };

  const removeOverlay = (e) => {
    const { target } = e;
    const menuContainer = target.closest(".menu__wrapper");
    if (!menuContainer) element.classList.remove("opened");
  };

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

  const profileBtn = Button({
    imgPath: icons.repair,
    className: "header__button",
    alt: "repair-icon",
    text: "",
  });

  menuWrapper.parentElement.addEventListener("click", removeOverlay);
  closeBtn.addEventListener("click", toggleClassMenu);

  footerBtnsWrapper.append(phoneBtn, messageBtn, profileBtn);

  return element;
};

export default Menu;
