import footer from "./components/Footer";
import header from "./components/Header";
import InfoSection from "./components/InfoSection";
import ServicesSection from "./components/ServicesSection";
import "./index.scss";

import InitSwipers from "./js/initSwipers";

const page = document.querySelector(".page");
const infoSection = InfoSection();
const servicesSection = ServicesSection();

page.prepend(header);
page.append(infoSection);
page.append(servicesSection);

InitSwipers();
