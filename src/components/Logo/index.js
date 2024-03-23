import htmlToElement from "../../utils/htmlToElement";
import LogoHTML from "./index.html";

import "./logo.scss";

const Logo = ({ imgPath, className }) => {
  const logoEl = htmlToElement(LogoHTML);
  logoEl.classList.add(className);

  const ImgEl = document.createElement("img");
  ImgEl.src = imgPath;
  ImgEl.alt = "logo-icon";

  logoEl.append(ImgEl);

  return logoEl;
};

export default Logo;
