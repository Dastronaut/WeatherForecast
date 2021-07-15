/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import App from './src/app/app';
import {name as appName} from './app.json';

LogBox.ignoreLogs([
  'Cannot update during an existing state transition',
  'Warning: Cannot update a component from inside the function body of a different component',
  'TypeError: JSON.stringify cannot serialize cyclic structures',
]);

AppRegistry.registerComponent(appName, () => App);
