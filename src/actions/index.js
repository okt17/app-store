import {
  SET_DEVICE,
  SET_APPS,
  SET_CATEGORIES,
  SET_COLLECTIONS,
  FETCH_APPS_FOR_DEVICE,
  FETCH_CATEGORIES,
  FETCH_COLLECTIONS,
} from './types';
import request from '../data/request';

export function setDevice(device) {
  return {
    type: SET_DEVICE,
    payload: device,
  };
}

export function setApps(apps, device) {
  return {
    type: SET_APPS,
    payload: {
      apps,
      device,
    },
  };
}

export function setCategories(categories) {
  const payload = categories.reduce(
    (acc, category) => ({
      ...acc,
      [category.id]: category,
    }),
    {},
  );

  return {
    type: SET_CATEGORIES,
    payload,
  };
}

export function setCollections(collections) {
  return {
    type: SET_COLLECTIONS,
    payload: collections,
  };
}

export function fetchAppsForDevice(device) {
  return (dispatch) => {
    request('apps', { device })
      .then(res => dispatch(setApps(res.results, device)))
      .catch(() => dispatch(setApps([], device))); // pretend to get empty data if the request fails

    return {
      type: FETCH_APPS_FOR_DEVICE,
      payload: device,
    };
  };
}

export function fetchCategories() {
  return (dispatch) => {
    request('categories')
      .then(res => dispatch(setCategories(res.results)))
      .catch(() => dispatch(setCategories([])));

    return {
      type: FETCH_CATEGORIES,
    };
  };
}

export function fetchCollections() {
  return (dispatch) => {
    request('collections')
      .then(res => dispatch(setCollections(res.results)))
      .catch(() => dispatch(setCollections([])));

    return {
      type: FETCH_COLLECTIONS,
    };
  };
}
