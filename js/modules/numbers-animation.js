export default class NumbersAnimation {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // Bind this to callbak to reference the class object
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Receives an element of the DOM, with a number in its text and increments
  // from 0 until the final number
  static incrementNumber(number) {
    const total = +number.innerText;
    const increment = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Activates incrementNumber for each number selected from the DOM
  numbersAnimation() {
    this.numbers.forEach((number) => this.constructor.incrementNumber(number));
  }

  // Is activated when a mutation occurs
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.numbersAnimation();
    }
  }

  // Add the MutationObserver to check when the active class is added to
  // element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
