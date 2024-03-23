import renderFeedback from "../js/renderFeedback";

const toggleOverlay = ({ modalClass, modalFormClass, inputs, title }) => {
  const modal = document.querySelector(`.${modalClass}`);
  const formElement = modal.querySelector(`.${modalFormClass}`);
  if (formElement) formElement.remove();
  renderFeedback({
    title: title,
    inputs: inputs,
  });

  modal.classList.toggle("opened");
};

export default toggleOverlay;
