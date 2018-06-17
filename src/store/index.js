import { createStore } from 'redux';
import rootReducer from '../reducers/root';
import { fetchCategories } from '../actions';

const store = createStore(rootReducer);

store.dispatch(fetchCategories()(store.dispatch));

export default store;
