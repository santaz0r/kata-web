import htmlToElement from "../../utils/htmlToElement";
import NavHTML from "./index.html";

import "./nav.scss";

const Nav = ({ className, liCounter, anchorTexts }) => {
  const navElement = htmlToElement(NavHTML);
  navElement.className = "navigation";
  navElement.classList.add(className);

  for (let i = 0; i < liCounter; i++) {
    const li = document.createElement("li");
    li.className = "navigation__item";

    i === 0 ? li.classList.add("navigation__item--active") : null;

    const anchor = document.createElement("a");
    anchor.href = "";
    anchor.textContent = anchorTexts[i].text;

    li.append(anchor);
    navElement.append(li);
  }

  return navElement;
};

export default Nav;
