import SmoothScroll from "./modules/smooth-scroll.js";
import initScrollAnimation from "./modules/scroll-animation.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMobileMenu from "./modules/mobile-menu.js";
import initOpeningHours from "./modules/opening-hours.js";
import initFetchAnimals from "./modules/fetch-animals.js";

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

initScrollAnimation();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMobileMenu();
initOpeningHours();
initFetchAnimals();
