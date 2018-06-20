import {
  SET_DEVICE,
  SET_APPS,
  SET_CATEGORIES,
  SET_COLLECTIONS,
  FETCH_APPS_FOR_DEVICE,
} from '../actions/types';
import DATA from '../data';

/*
  // модель состояния приложения (хранилища)

  interface StoreState {
    selectedDevice: 'iPhone' | 'iPad';
    isLoading: boolean;
    apps?: AppEntry[];
    categories?: Category[];
    collections?: Collection[];
    banners: string[];
  }
*/

const initialState = {
  selectedDevice: 'iPhone',
  isLoading: false,
  banners: DATA.banners,
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_APPS_FOR_DEVICE:
      return {
        ...state,
        isLoading: true,
      };

    case SET_DEVICE:
      return {
        ...state,
        device: payload,
      };

    case SET_APPS:
      return {
        ...state,
        apps: payload.apps,
        selectedDevice: payload.device,
        isLoading: false,
      };

    case SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    case SET_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
