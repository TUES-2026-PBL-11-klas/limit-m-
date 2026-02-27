import BackgroundFetch from 'react-native-background-fetch';
import { NativeModules } from 'react-native';
import { getTodayRange } from '../hooks/useUsageStats.js';
import { API_BASE_URL } from '../config';
const { UsageStatsModule } = NativeModules;

async function snapshotAndSend() {
  try {
    const hasPermission = await UsageStatsModule.hasUsagePermission();
    if (!hasPermission) return;

    const { start, end } = getTodayRange();
    const sessions = await UsageStatsModule.getUsage(start, end);

    for (const session of sessions) {
      const startTime = new Date(session.startTimestamp).toISOString();
      const endTime = new Date(session.endTimestamp).toISOString();
      try {
        await fetch(`${API_BASE_URL}/session/post-session`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: 1,
            apps: session.appName,
            start_time: startTime,
            end_time: endTime,
          }),
        });
      } catch (err) {
        console.warn(`Failed to send session for ${session.appName}:`, err);
      }
    }

  } catch (e) {
    console.warn('Background snapshot failed:', e);
  }
}

export function initBackgroundSync() {
  BackgroundFetch.configure(
    {
      minimumFetchInterval: 60, // minutes
      stopOnTerminate: false,
      startOnBoot: true,
      enableHeadless: true,
      requiredNetworkType: BackgroundFetch.NETWORK_TYPE_ANY,
    },
    async (taskId) => {
      await snapshotAndSend();
      BackgroundFetch.finish(taskId);
    },
    (taskId) => {
      console.warn('Background fetch timed out:', taskId);
      BackgroundFetch.finish(taskId);
    }
  );
}