const githubReducer = (state, action) => {
  if (action.type === "GET_USERS") {
    return {
      ...state,
      users: action.payload,
      loading: false,
    };
  } else if (action.type === "SET_LOADING") {
    return {
      ...state,
      loading: true,
    };
  }

  return state;
};

export default githubReducer;
