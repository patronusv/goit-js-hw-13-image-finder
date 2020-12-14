import imageService from '../api/apiService.js';
import { fetchImages } from './fetchImages.js';
import { resetMarkup } from './updateMarkup.js';
export const formHandler = e => {
  const previousQuery = imageService.query;
  imageService.page = 1;
  imageService.query = e.target.value;
  if (imageService.query !== previousQuery && imageService.query) {
    resetMarkup();
    fetchImages(e);
  }
};
