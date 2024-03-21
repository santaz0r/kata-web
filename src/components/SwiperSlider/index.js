import htmlToElement from "../../utils/htmlToElement";
import swiperHTML from "./index.html";
import Swiper from "swiper";

import { Pagination } from "swiper/modules";

import "./swiper.scss";

const SwiperTempalte = ({
  swiperClass,
  paginationClass,
  template,
  accordion = "",
}) => {
  const element = htmlToElement(swiperHTML);
  const swiper = element.querySelector(".swiper");
  swiper.classList.add(swiperClass);

  const pagination = element.querySelector(".swiper-pagination");
  pagination.classList.add(paginationClass);

  swiper.append(template, accordion);

  return element;
};

export default SwiperTempalte;
