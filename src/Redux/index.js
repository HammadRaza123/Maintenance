
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './Reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // whitelist:['Auth']        ///this is missing in mmy code
};
const persistedReducer = persistReducer(persistConfig, Reducers);
const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
let persistor = persistStore(store);
export { store, persistor }