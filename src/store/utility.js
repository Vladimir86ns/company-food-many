
/**
 * Clone old state, and update wit new state.
 */
export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues
  }
};

/**
 * Return boolean, if user token is valid.
 */
export const checkUser = () => {
  let token = localStorage.getItem('jwt');

  if (token === null) {
    this.props.history.push("login")
  };
}

/**
 * Return company id from local storage.
 */
export const getCompanyId = () => {
  return localStorage.getItem('company_id');
}