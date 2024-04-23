import SmoothScroll from "./modules/smooth-scroll.js";
import Accordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMobileMenu from "./modules/mobile-menu.js";
import initOpeningHours from "./modules/opening-hours.js";
import initFetchAnimals from "./modules/fetch-animals.js";
import initScrollAnimation from "./modules/scroll-animation.js";

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMobileMenu();
initOpeningHours();
initFetchAnimals();
initScrollAnimation();
