import {
  SET_DEVICE,
  SET_APPS,
  SET_CATEGORIES,
  SET_COLLECTIONS,
  FETCH_APPS_FOR_DEVICE,
} from '../actions/types';

/*
  interface StoreState {
    selectedDevice: 'iPhone' | 'iPad';
    isLoading: boolean;
    apps?: AppEntry[];
    categories?: Category[];
    collections?: Collection[];
  }
*/

const initialState = {
  selectedDevice: 'iPhone',
  isLoading: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_APPS_FOR_DEVICE:
      return {
        ...state,
        isLoading: true,
      };

    case SET_DEVICE:
      return {
        ...state,
        device: action.payload,
      };

    case SET_APPS:
      return {
        ...state,
        apps: action.payload.apps,
        selectedDevice: action.payload.device,
        isLoading: false,
      };

    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case SET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
