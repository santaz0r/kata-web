import htmlToElement from "../../utils/htmlToElement";
import formHTML from "./index.html";

import "./form.scss";

const ModalForm = ({ inputs }) => {
  const element = htmlToElement(formHTML);
  const inpustContainer = element.querySelector(".form__inputs");
  const btn = element.querySelector(".form__button");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(element);
    const formProps = Object.fromEntries(formData);

    console.log(formData, formProps);
  });

  inputs.map((i) => inpustContainer.append(i));

  return element;
};

export default ModalForm;
