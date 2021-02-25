const feedbackReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_WORK_REQUESTS':
      return action.payload;
    default:
      return state;
  }
};

export default feedbackReducer;
