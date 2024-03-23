import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import accordionListener from "../utils/accordionListener";
import createSwiper from "../utils/createSwiper";

const clientWidth = document.body.clientWidth;

const InitSwipers = () => {
  const brandsWrapper = document.querySelector(".brands-slider__wrapper");
  const servicesAccordion = document.querySelector(".services__accordion");

  const typesWrapper = document.querySelector(".types-slider__wrapper");
  const typesAccordion = document.querySelector(".types__accordion");

  const pricesWrapper = document.querySelector(".prices-slider__wrapper");

  if (clientWidth < 768) {
    createSwiper({
      swiperClass: "brands-slider",
      paginationClass: "brands-slider__pagination",
    });
    createSwiper({
      swiperClass: "types-slider",
      paginationClass: "types-slider__pagination",
    });
    createSwiper({
      swiperClass: "prices-slider",
      paginationClass: "prices-slider__pagination",
      width: 260,
      spaceBetween: 13,
    });
  } else {
    brandsWrapper.classList.add("brands-grid__wrapper");
    typesWrapper.classList.add("types-grid__wrapper");
    pricesWrapper.classList.add("prices-grid__wrapper");
    accordionListener({
      element: servicesAccordion,
      hidedElement: brandsWrapper,
    });
    accordionListener({
      element: typesAccordion,
      hidedElement: typesWrapper,
    });
  }
};

export default InitSwipers;
