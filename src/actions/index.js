import {
  SET_DEVICE,
  SET_APPS,
  SET_CATEGORIES,
  FETCH_DATA_FOR_DEVICE,
  FETCH_CATEGORIES,
} from './types';
import request from '../data/request';

export function setDevice(device) {
  return {
    type: SET_DEVICE,
    payload: device,
  };
}

export function setApps(apps) {
  return {
    type: SET_APPS,
    payload: apps,
  };
}

export function setCategories(categories) {
  // make a dictionary out of array
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

export function fetchDataForDevice(device) {
  return (dispatch) => {
    request('apps', { device })
      .then(res => dispatch(setApps(res.results)));

    return {
      type: FETCH_DATA_FOR_DEVICE,
      payload: device,
    };
  };
}

export function fetchCategories() {
  return (dispatch) => {
    request('categories')
      .then(res => dispatch(setCategories(res.results)));

    return {
      type: FETCH_CATEGORIES,
    };
  };
}
