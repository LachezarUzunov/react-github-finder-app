const alertReducer = (state, action) => {
  if (action.type === "SET_ALERT") {
    return action.payload;
  } else if (action.type === "REMOVE_ALERT") {
    return null;
  }
  return state;
};

export default alertReducer;
