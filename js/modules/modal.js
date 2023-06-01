export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    // bind this for the callback to do reference for the class object
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // open or close modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // add toggle event on modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // closed modal on click outside
  cliqueForaModal(event) {
    if (event.target === this.containerModal) this.toggleModal();
  }

  // add elements events of the modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }

    return this;
  }
}
