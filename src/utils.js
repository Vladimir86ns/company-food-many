
import {
  APP_URL,
  UPLOAD_COMPANY_PRODUCT_PATH,
  COMPANY_ID
} from './constants';

export function getCompanyProductImagePath() {
  return APP_URL + UPLOAD_COMPANY_PRODUCT_PATH + '/' + COMPANY_ID + '/';
};