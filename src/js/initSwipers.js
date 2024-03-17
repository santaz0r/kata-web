import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import accordionListener from "../utils/accordionListener";

const clientWidth = document.body.clientWidth;

const InitSwipers = () => {
  const brandsWrapper = document.querySelector(".brands-slider__wrapper");
  const servicesAccordion = document.querySelector(".services__accordion");

  const typesWrapper = document.querySelector(".types-slider__wrapper");
  const typesAccordion = document.querySelector(".types__accordion");

  if (clientWidth < 768) {
    const brandsSwiper = new Swiper(`.brands-slider`, {
      modules: [Pagination],
      pagination: {
        el: `.brands-slider__pagination`,
        clickable: true,
      },
      width: 240,
      spaceBetween: 20,
    });
    const typesSwiper = new Swiper(`.types-slider`, {
      modules: [Pagination],
      pagination: {
        el: `.types-slider__pagination`,
        clickable: true,
      },
      width: 240,
      spaceBetween: 20,
    });
  } else {
    brandsWrapper.classList.add("brands-grid__wrapper");
    typesWrapper.classList.add("types-grid__wrapper");
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
