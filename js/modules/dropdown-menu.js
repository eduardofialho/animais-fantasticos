import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // defines touchstart and click as default arguments of events if the user
    // don't define
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeClass = "active";
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Activates the dropdownMenu and adds the function that observes the click
  // outside of it
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Add events to the dropdownMenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
