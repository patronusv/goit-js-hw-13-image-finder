import { refs } from '../refs/refs.js';

export const buttonShow = () => {
  refs.buttonLoad.classList.remove('is-hidden');
  refs.buttonLoad.classList.remove('disabled');
  refs.buttonLoad.disabled = false;
  refs.buttonLoad.textContent = 'Load more';
};

export const buttonDisable = () => {
  refs.buttonLoad.disabled = true;
  refs.buttonLoad.classList.add('disabled');
  refs.buttonLoad.textContent = 'loading ...';
};
