const preloader = {
  fxEnableButton(el) {
    el.removeAttribute('disabled');
  },

  fxDisableButton(el) {
    el.setAttribute('disabled', true);
  },

  fxCreateSpinner(el) {
    const spinner = document.createElement('div');
    spinner.classList.add('btn--loading-spinner');
    el.appendChild(spinner);
  },

  fxRemoveSpinner(el) {
    el.querySelector('.btn--loading-spinner').remove();
  },

  fxPreloaderAdd(el) {
    const button = el.querySelector('.js-preloader');
    button.classList.add('btn--loading');
    this.fxDisableButton(button);
    this.fxCreateSpinner(button);
  },

  fxPreloaderRemove(el) {
    const button = el.querySelector('.js-preloader');
    button.classList.remove('btn--loading');
    this.fxEnableButton(button);
    this.fxRemoveSpinner(button);
  }
};
