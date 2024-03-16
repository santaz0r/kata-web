import footer from "./components/Footer";
import header from "./components/Header";
import InfoSection from "./components/InfoSection";
import "./index.scss";

const page = document.querySelector(".page");
const infoSection = InfoSection();

page.prepend(header);
page.append(infoSection);
