import icons from "../../assets";
import htmlToElement from "../../utils/htmlToElement";
import modalHTML from "./index.html";
import Button from "../Button";

import "./modal.scss";

const Modal = ({ title }) => {
  const element = htmlToElement(modalHTML);
  const modalTitle = element.querySelector(".modal__title");
  modalTitle.textContent = title;

  const wrapper = element.querySelector(".modal__wrapper");

  const handleClose = () => {
    element.classList.toggle("opened");
  };

  const modalClose = Button({
    alt: "close",
    className: "modal__close",
    imgPath: icons.cross,
    text: "",
    onClick: handleClose,
  });

  wrapper.append(modalClose, modalTitle);

  return element;
};

export default Modal;
