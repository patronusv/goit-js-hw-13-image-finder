import './styles.css';
import debounce from 'lodash/debounce.js';
import { refs } from './refs/refs.js';
import { fetchImages } from './components/fetchImages.js';
import { formHandler } from './components/formHandler.js';
import { openModal } from './components/modal.js';

refs.searchForm.addEventListener(
  'input',
  debounce(e => formHandler(e), 500),
);
refs.searchForm.addEventListener('submit', e => e.preventDefault());
refs.buttonLoad.addEventListener('click', e => fetchImages(e));
refs.gallery.addEventListener('click', openModal);
