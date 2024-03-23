import footer from "./components/Footer";
import header from "./components/Header";
import InfoSection from "./components/InfoSection";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import ServicesSection from "./components/ServicesSection";
import "./index.scss";

import InitSwipers from "./js/initSwipers";

const main = document.querySelector(".main");
const page = document.querySelector(".page");
const pageWrapper = document.querySelector(".page__wrapper");

const infoSection = InfoSection();
const servicesSection = ServicesSection();
const modal = Modal({ title: "Lorem" });
const menu = Menu();

page.prepend(modal);
main.prepend(header);
pageWrapper.prepend(menu);
main.append(infoSection);
main.append(servicesSection);
main.append(footer);

InitSwipers();
