import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import accordionListener from "../utils/accordionListener";

const clientWidth = document.body.clientWidth;

const InitSwipers = () => {
  const brandsWrapper = document.querySelector(".brands-slider__wrapper");
  const servicesAccordion = document.querySelector(".services__accordion");

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
    return brandsSwiper;
  } else {
    brandsWrapper.classList.add("brands-grid__wrapper");
    accordionListener({
      element: servicesAccordion,
      hidedElement: brandsWrapper,
    });
  }
};

export default InitSwipers;
