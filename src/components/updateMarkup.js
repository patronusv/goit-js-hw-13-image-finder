import galleryTemplate from '../templates/gallery-template.hbs';
import { refs } from '../refs/refs.js';
export const updateMarkup = data => {
  const markup = galleryTemplate(data);
  console.log(data);
  refs.content.insertAdjacentHTML('beforeend', markup);
};
export const resetMarkup = () => {
  refs.content.innerHTML = '';
};
