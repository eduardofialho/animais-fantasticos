export default class OpeningHours {
  constructor(openingHours, activeClass) {
    this.openingHours = document.querySelector(openingHours);
    this.activeClass = activeClass;
  }

  dataOpeningHours() {
    this.daysWeek = this.openingHours.dataset.week.split(",").map(Number);
    this.hoursWeek = this.openingHours.dataset.time.split(",").map(Number);
  }

  dataNow() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.hourNow = this.dateNow.getUTCHours() - 3;
  }

  isOpen() {
    const weekOpen = this.daysWeek.indexOf(this.dayNow) !== -1;
    const hourOpen =
      this.hourNow >= this.hoursWeek[0] && this.hourNow < this.hoursWeek[1];
    return weekOpen && hourOpen;
  }

  activeOpen() {
    if (this.isOpen()) {
      this.openingHours.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.openingHours) {
      this.dataOpeningHours();
      this.dataNow();
      this.activeOpen();
    }
  }
}
