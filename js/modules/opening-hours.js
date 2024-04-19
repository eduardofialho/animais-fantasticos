export default function initOpeningHours() {
  const openingHours = document.querySelector("[data-week]");
  const daysWeek = openingHours.dataset.week.split(",").map(Number);
  const hoursWeek = openingHours.dataset.time.split(",").map(Number);

  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const hourNow = dateNow.getHours();

  const weekOpen = daysWeek.indexOf(dayNow) !== -1;
  const hourOpen = hourNow >= hoursWeek[0] && hourNow < hoursWeek[1];

  if (weekOpen && hourOpen) {
    openingHours.classList.add("open");
  }
}
