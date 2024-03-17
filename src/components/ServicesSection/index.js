import icons from "../../assets";
import htmlToElement from "../../utils/htmlToElement";
import Accordion from "../Accordion";
import SwiperTempalte from "../SwiperSlider";

import BrandsTemplate from "../SwiperTemplates/BrandsTemplate";
import ServicesHTML from "./index.html";

import "./services.scss";

const ServicesSection = () => {
  const element = htmlToElement(ServicesHTML);

  const h3Element = document.createElement("h3");
  h3Element.className = "services__title";
  h3Element.textContent = "Ремонт техники различных брендов";

  element.append(h3Element);

  const accordion = Accordion({
    className: "services__accordion",
    text: "Показать все",
    imgPath: icons.expand,
    alt: "expand",
  });

  const brandsSwiper = SwiperTempalte({
    swiperClass: "brands-slider",
    paginationClass: "brands-slider__pagination",
    template: BrandsTemplate(),
    accordion: accordion,
  });

  element.append(brandsSwiper);

  return element;
};

export default ServicesSection;
