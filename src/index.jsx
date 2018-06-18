import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import {
  fetchAppsForDevice,
  fetchCategories,
  fetchCollections,
} from './actions';
import './style';

function mapStateToProps(state) {
  return {
    selectedDevice: state.selectedDevice,
    isLoading: state.isLoading,
    apps: state.apps,
    categories: state.categories,
    collections: state.collections,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAppsForDevice: device => dispatch(fetchAppsForDevice(device)(dispatch)),
  };
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

const unsubscribe = store.subscribe(() => {
  const {
    categories,
    collections,
  } = store.getState();

  if (
    categories !== undefined
    &&
    collections !== undefined
  ) {
    unsubscribe();

    ReactDOM.render(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>,
      document.getElementById('app-root'),
    );
  }
});

store.dispatch(fetchCategories()(store.dispatch));
store.dispatch(fetchCollections()(store.dispatch));
