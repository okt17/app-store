import {
  SET_DEVICE,
  SET_APPS,
  SET_CATEGORIES,
  FETCH_DATA_FOR_DEVICE,
} from '../actions/types';

const initialState = {
  selectedDevice: 'iPhone', // 'iPhone' | 'iPad'
  fetchingForDevice: undefined,
};

function rootReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_DATA_FOR_DEVICE:
      return {
        ...state,
        fetchingForDevice: action.payload,
      };

    case SET_DEVICE:
      return {
        ...state,
        device: action.payload,
      };

    case SET_APPS:
      return {
        ...state,
        selectedDevice: state.fetchingForDevice,
        fetchingForDevice: undefined,
        apps: action.payload,
      };

    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
