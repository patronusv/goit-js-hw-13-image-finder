import { refs } from '../refs/refs.js';
import imageService from '../api/apiService.js';
import {
  buttonShow,
  buttonDisable,
  buttonHide,
} from '../components/buttonLoad.js';
import { updateMarkup } from './updateMarkup.js';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/confirm/dist/PNotifyConfirm.css';
// import { error, defaultModules } from '@pnotify/core/dist/PNotify';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// defaultModules.set(PNotifyMobile, {});
import { errorNoMatch, noticeLoad } from './alerts.js';

export const fetchImages = e => {
  if (!imageService.query) {
    return;
  } else buttonDisable();
  imageService
    .fetchImages(e)
    .then(data => {
      if (data.length === 0) {
        buttonHide();
        errorNoMatch().open();
        // error({
        //   text: 'No match found. Please provide a different query',
        //   delay: 5000,
        // });
        return;
      }
      noticeLoad(data, imageService.query).open();
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
