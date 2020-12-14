import * as basicLightbox from 'basiclightbox';
import { refs } from '../refs/refs.js';
import 'basiclightbox/dist/basicLightbox.min.css';
const onEscPress = e => {
  if (e.code === 'Escape') {
    instance.close();
  }
};
const instance = basicLightbox.create(refs.modalTemplate, {
  onShow() {
    window.addEventListener('keydown', onEscPress);
  },
  onClose() {
    window.removeEventListener('keydown', onEscPress);
  },
});
export const openModal = e => {
  if (e.target.nodeName !== 'IMG') return;
  instance.show();
  const modalImage = document.querySelector('.modal-image');
  modalImage.src = e.target.dataset.source;
};
