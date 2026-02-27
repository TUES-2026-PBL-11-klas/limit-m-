import { registerRootComponent } from 'expo';
import App from './App';

import BackgroundFetch from 'react-native-background-fetch';
import { snapshotAndSend } from './services/backgroundSync';

BackgroundFetch.registerHeadlessTask(async (event) => {
  await snapshotAndSend();
  BackgroundFetch.finish(event.taskId);
});

registerRootComponent(App);