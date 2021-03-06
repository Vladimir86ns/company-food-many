/**
 * Return boolean, if user token is valid.
 */
export function checkUser() {
  return localStorage.getItem('jwt');
}

/**
 * Return company id from local storage.
 */
export function getCompanyId() {
  return localStorage.getItem('company_id');
}

/**
 * Return company id from local storage.
 */
export function getEmployeeId() {
  return localStorage.getItem('employee_id');
}

/**
 * Return path for picture regarding to company ID.
 */
export function getCompanyProductImagePath() {
  return process.env.REACT_APP_API_URL +
    process.env.REACT_APP_UPLOAD_COMPANY_PRODUCT_PATH + '/' + getCompanyId() + '/';
};

/**
 * Redirect to page.
 */
export function redirectToPage(props, url) {
  props.history.push(url)
}