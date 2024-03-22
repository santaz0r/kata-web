import footer from "./components/Footer";
import header from "./components/Header";
import InfoSection from "./components/InfoSection";
import Modal from "./components/Modal";
import ServicesSection from "./components/ServicesSection";
import "./index.scss";

import InitSwipers from "./js/initSwipers";

const page = document.querySelector(".page");
const infoSection = InfoSection();
const servicesSection = ServicesSection();
const modal = Modal({ title: "text123" });

page.prepend(header);
page.prepend(modal);
page.append(infoSection);
page.append(servicesSection);
page.append(footer);

InitSwipers();
