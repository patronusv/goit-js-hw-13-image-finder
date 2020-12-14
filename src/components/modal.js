import * as basicLightbox from 'basiclightbox';
import { refs } from '../refs/refs.js';
import 'basiclightbox/dist/basicLightbox.min.css';
const instance = basicLightbox.create(refs.modalTemplate);
export const openModal = e => {
  if (e.target.nodeName !== 'IMG') return;
  instance.show();
  const modalImage = document.querySelector('.modal-image');
  modalImage.src = e.target.dataset.source;
};
