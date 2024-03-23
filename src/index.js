import "./index.scss";
import RenderMainPage from "./js/RenderMainPage";

const main = document.querySelector(".main");
const page = document.querySelector(".page");
const pageWrapper = document.querySelector(".page__wrapper");

RenderMainPage({
  main,
  page,
  pageWrapper,
});
