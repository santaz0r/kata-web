import "./textfield.scss";

const TextField = ({ type, placeholder, classList }) => {
  const element =
    type === "textarea"
      ? document.createElement("textarea")
      : document.createElement("input");
  element.className = "my-input";
  element.name = type;
  element.placeholder = placeholder;
  if (classList) element.classList.add(classList);
  return element;
};

export default TextField;
