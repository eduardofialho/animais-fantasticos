export default class Modal {
  constructor(openButton, closeButton, containerModal) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.containerModal = document.querySelector(containerModal);

    // Bind this to callbak to reference the class object
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  // Open/close the modal
  toggleModal() {
    this.containerModal.classList.toggle("active");
  }

  // Add toggle event to modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Close the modal when clicking outside
  clickOutsideModal(event) {
    if (event.target === this.containerModal) this.toggleModal();
  }

  // Add events to modal elements
  addModalEvents() {
    this.openButton.addEventListener("click", this.eventToggleModal);
    this.closeButton.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickOutsideModal);
  }

  init() {
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
