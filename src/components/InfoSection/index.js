import icons from "../../assets";
import navAnchorText, { getLiLength } from "../../data/navAnchorText";
import htmlToElement from "../../utils/htmlToElement";
import Accordion from "../Accordion";
import Nav from "../Nav";
import Subtitle from "../Subtitle";
import InfoHTML from "./index.html";

import "./info.scss";

const InfoSection = () => {
  const infoElement = htmlToElement(InfoHTML);
  const infoElementContainer = infoElement.querySelector(".container");
  const infoDescription = infoElement.querySelector(".description__item");
  console.log(infoDescription);
  const accordion = Accordion({
    className: "info__accordion",
    text: "Читать далее",
    imgPath: icons.expand,
    alt: "expand",
  });

  const subtitle = Subtitle({
    className: "info__subtitle",
    text: "Услуги и сервисы",
  });

  const navigation = Nav({
    className: "info__navigation",
    liCounter: getLiLength(),
    anchorTexts: navAnchorText,
  });

  infoElementContainer.prepend(subtitle, navigation);
  infoDescription.append(accordion);

  return infoElement;
};

export default InfoSection;
