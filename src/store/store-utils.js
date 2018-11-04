
/**
 * Clone old state, and update wit new state.
 */
export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues
  }
};