const accordionListener = ({ element, hidedElement }) => {
  element.addEventListener("click", (e) => {
    const { target } = e;
    const parentElement = target.closest(".accordion");
    const text = parentElement.querySelector(".accordion__text");

    hidedElement.classList.toggle("opened");
    element.classList.toggle("opened");
    text.textContent = element.classList.contains("opened")
      ? "Скрыть"
      : "Показать все";
  });
};

export default accordionListener;
