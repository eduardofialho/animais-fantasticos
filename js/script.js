import SmoothScroll from "./modules/smooth-scroll.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import initMobileMenu from "./modules/mobile-menu.js";
import initOpeningHours from "./modules/opening-hours.js";
import fetchAnimals from "./modules/fetch-animals.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import ScrollAnimation from "./modules/scroll-animation.js";

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
tabNav.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]',
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnimation = new ScrollAnimation('[data-anime="scroll"');
scrollAnimation.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

initMobileMenu();
initOpeningHours();

fetchAnimals("../../animals-api.json", ".numbers-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-price");
