import './styles.css';
import debounce from 'lodash/debounce.js';
import { refs } from './refs/refs.js';
import imageService from './api/apiService.js';
import { updateMarkup, resetMarkup } from './components/updateMarkup.js';
import { buttonShow, buttonDisable } from './components/buttonLoad.js';

const fetchImages = e => {
  if (!imageService.query) {
    return;
  } else
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
  const previousQuery = imageService.query;
  console.log(previousQuery);
  imageService.page = 1;
  imageService.query = e.target.value;
  if (imageService.query !== previousQuery && imageService.query) {
    resetMarkup();
    fetchImages(e);
  }
};
// refs.searchForm.addEventListener('change', e => formHandler(e));
refs.searchForm.addEventListener(
  'input',
  debounce(e => formHandler(e), 500),
);
refs.searchForm.addEventListener('submit', e => e.preventDefault());
refs.buttonLoad.addEventListener('click', e => {
  fetchImages(e);
  buttonDisable();
});
