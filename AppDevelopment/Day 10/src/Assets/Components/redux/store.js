
import { createStore } from 'redux';
import inventoryReducer from './reducers/inventoryReducer';
const store = createStore(inventoryReducer);

export default store;
