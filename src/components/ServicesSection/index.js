import icons from "../../assets";
import htmlToElement from "../../utils/htmlToElement";
import Accordion from "../Accordion";
import SwiperTempalte from "../SwiperSlider";

import BrandsTemplate from "../SwiperTemplates/BrandsTemplate";
import PricesTemplate from "../SwiperTemplates/PriceTemplates";
import TypesTemplate from "../SwiperTemplates/TypesTemplate";
import ServicesHTML from "./index.html";

import "./services.scss";

const ServicesSection = () => {
  const element = htmlToElement(ServicesHTML);

  const h3Brands = document.createElement("h3");
  h3Brands.className = "services__title";
  h3Brands.textContent = "Ремонт техники различных брендов";

  const h3Types = document.createElement("h3");
  h3Types.className = "services__title";
  h3Types.textContent = "Ремонт различных видов техники";

  const h3Prices = document.createElement("h3");
  h3Prices.className = "services__title";
  h3Prices.textContent = "Цены на услуги";

  const brandsAccordion = Accordion({
    className: "services__accordion",
    text: "Показать все",
    imgPath: icons.expand,
    alt: "expand",
  });

  const typesAccordion = Accordion({
    className: "types__accordion",
    text: "Показать все",
    imgPath: icons.expand,
    alt: "expand",
  });

  const brandsSwiper = SwiperTempalte({
    swiperClass: "brands-slider",
    paginationClass: "brands-slider__pagination",
    template: BrandsTemplate(),
    accordion: brandsAccordion,
  });

  const typesSwiper = SwiperTempalte({
    swiperClass: "types-slider",
    paginationClass: "types-slider__pagination",
    template: TypesTemplate(),
    accordion: typesAccordion,
  });

  const pricesSwiper = SwiperTempalte({
    swiperClass: "prices-slider",
    paginationClass: "prices-slider__pagination",
    template: PricesTemplate(),
  });

  element.append(
    h3Brands,
    brandsSwiper,
    h3Types,
    typesSwiper,
    h3Prices,
    pricesSwiper
  );

  return element;
};

export default ServicesSection;
