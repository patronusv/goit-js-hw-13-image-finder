import './styles.css';
import { refs } from './refs/refs.js';
import imageService from './api/apiService.js';
import { updateMarkup, resetMarkup } from './components/updateMarkup.js';
import { buttonShow, buttonDisable } from './components/buttonLoad.js';

const fetchImages = e => {
  imageService
    .fetchImages(e)
    .then(data => {
      updateMarkup(data);
      buttonShow();
    })
    .then(() => {
      window.scrollBy({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    });
};
const formHandler = e => {
  console.log(e);
  resetMarkup();
  imageService.page = 1;
  imageService.query = e.target.value;
  fetchImages(e);
};
refs.searchForm.addEventListener('change', e => formHandler(e));
refs.searchForm.addEventListener('submit', e => e.preventDefault());
refs.buttonLoad.addEventListener('click', e => {
  fetchImages(e);
  buttonDisable();
});
