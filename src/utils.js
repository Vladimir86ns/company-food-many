
import {
  LOCAL_STORAGE
} from './constants';

export function getCompanyProductImagePath() {
  console.log('local storage', LOCAL_STORAGE.COMPANY_ID);
  return process.env.REACT_APP_API_URL +
    process.env.REACT_APP_UPLOAD_COMPANY_PRODUCT_PATH + '/' + LOCAL_STORAGE.COMPANY_ID + '/';
};

export function redirectToPage(props, url)
{
  props.history.push(url)
}