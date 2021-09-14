import React from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './Redux/index';
import Routes from './Routes/index';
import RNBootSplash from "react-native-bootsplash";
setTimeout(() => {
  RNBootSplash.hide({ fade: true });
}, 1000);
RNBootSplash.getVisibilityStatus();

LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(['componentWillReceiveProps has been renamed, and is not recommended for use']);
LogBox.ignoreLogs(['VirtualizedLists should never be nested', 'VirtualizedList: missing keys for items,']);
LogBox.ignoreLogs(['componentWillUpdate has been renamed, and is not recommended for use']);
export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
