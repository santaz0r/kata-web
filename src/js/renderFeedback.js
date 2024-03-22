import ModalForm from "../components/Form";

const renderFeedback = ({ title, inputs }) => {
  const wrapper = document.querySelector(".modal__wrapper");
  const titleEl = document.querySelector(".modal__title");

  titleEl.textContent = title;
  const form = ModalForm({
    inputs: inputs,
  });

  wrapper.append(form);
};

export default renderFeedback;
