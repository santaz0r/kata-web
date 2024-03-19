import Swiper from "swiper";
import { Pagination } from "swiper/modules";

const createSwiper = ({
  swiperClass,
  paginationClass,
  width = 240,
  spaceBetween = 20,
}) => {
  return new Swiper(`.${swiperClass}`, {
    modules: [Pagination],
    pagination: {
      el: `.${paginationClass}`,
      clickable: true,
    },
    width: width,
    spaceBetween: spaceBetween,
  });
};

export default createSwiper;
