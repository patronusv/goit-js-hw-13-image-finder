import galleryTemplate from '../templates/gallery-template.hbs';
import { refs } from '../refs/refs.js';
export const updateMarkup = data => {
  const markup = galleryTemplate(data);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
};
export const resetMarkup = () => {
  refs.gallery.innerHTML = '';
};
