import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';
import { notice, error, defaultModules } from '@pnotify/core/dist/PNotify';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});

export const errorNoMatch = () =>
  error({
    text: 'No match found. Please provide a different query',
    delay: 5000,
    autoOpen: false,
  });
export const noticeLoad = (data, query) =>
  notice({
    text: `Showing ${data.length} results for ${query}`,
    delay: 2000,
    autoOpen: false,
  });
