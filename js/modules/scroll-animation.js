export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    this.animateScroll = this.animateScroll.bind(this);
  }

  animateScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.halfWindow < 0;

      if (isSectionVisible) {
        section.classList.add("active");
      } else if (section.classList.contains("active")) {
        section.classList.remove("active");
      }
    });
  }

  init() {
    this.animateScroll();
    window.addEventListener("scroll", this.animateScroll);
  }
}
