
import {
  COMPANY_ID
} from './constants';

export function getCompanyProductImagePath() {
  return process.env.REACT_APP_URL +
    process.env.REACT_APP_UPLOAD_COMPANY_PRODUCT_PATH + '/' + COMPANY_ID + '/';
};