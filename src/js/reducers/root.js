const initialState = {
  data: undefined,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default rootReducer;
