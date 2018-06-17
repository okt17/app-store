import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import { fetchDataForDevice } from './actions';
import './style';

function mapStateToProps(state) {
  return {
    selectedDevice: state.selectedDevice,
    isLoading: state.fetchingForDevice !== undefined,
    categories: state.categories,
    apps: state.apps,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSwitcherButtonClick: platform => dispatch(fetchDataForDevice(platform)(dispatch)),
  };
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app-root'),
);
