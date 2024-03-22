import TextField from "../components/Form/TextField";

const inputName = TextField({
  placeholder: "Имя",
  type: "text",
});
const inputPhone = TextField({
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

export { inputName, inputPhone, inputEmail, inputMessage };
