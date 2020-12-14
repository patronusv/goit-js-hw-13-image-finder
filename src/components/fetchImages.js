import { refs } from '../refs/refs.js';
import imageService from '../api/apiService.js';
import { buttonShow, buttonDisable } from '../components/buttonLoad.js';
import { updateMarkup } from './updateMarkup.js';
export const fetchImages = e => {
  if (!imageService.query) {
    return;
  } else buttonDisable();
  imageService
    .fetchImages(e)
    .then(data => {
      updateMarkup(data);
      buttonShow();
    })
    .then(() => {
      if (e.target === refs.buttonLoad) {
        window.scrollBy({
          top: document.documentElement.clientHeight,
          behavior: 'smooth',
        });
      }
    });
};
