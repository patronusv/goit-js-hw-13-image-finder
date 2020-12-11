import './styles.css';
import { refs } from './refs/refs.js';
import imageService from './api/apiService.js';
import { updateMarkup, resetMarkup } from './components/updateMarkup.js';

const fetchImages = e => {
  imageService.fetchImages(e).then(data => {
    updateMarkup(data);
    console.log(imageService.page);
    console.log(imageService.query);
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
refs.buttonLoad.addEventListener('click', e => fetchImages(e));
