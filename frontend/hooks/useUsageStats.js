import { useState, useEffect, useRef, useCallback } from 'react';
import { AppState, NativeModules } from 'react-native';

const { UsageStatsModule } = NativeModules;

const REFRESH_INTERVAL_MS = 60 * 60 * 1000; // 1 hour

function getTodayRange() {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  return {
    start: start.getTime(),
    end: Date.now(),
  };
}

export function useScreenTime() {
  const [totalMinutes, setTotalMinutes] = useState(null);
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const intervalRef = useRef(null);

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const hasPermission = await UsageStatsModule.hasUsagePermission();
      if (!hasPermission) {
        setError('no_permission');
        return;
      }

      const { start, end } = getTodayRange();
      const data = await UsageStatsModule.getUsage(start, end, 'daily');

      setTotalMinutes(Math.round(data.totalSeconds / 60));
      setApps(data.apps);
    } catch (e) {
      setError(e.message ?? 'unknown_error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Fetch immediately on mount
    fetch();

    // Fetch every hour while app is running
    intervalRef.current = setInterval(fetch, REFRESH_INTERVAL_MS);

    // Fetch whenever user returns to the app
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') fetch();
    });

    return () => {
      clearInterval(intervalRef.current);
      sub.remove();
    };
  }, [fetch]);

  return { totalMinutes, apps, loading, error, refresh: fetch };
}

export function useUsagePermission() {
  const check = useCallback(async () => {
    try {
      return await UsageStatsModule.hasUsagePermission();
    } catch (e) {
      return false;
    }
  }, []);

  const openSettings = useCallback(() => {
    UsageStatsModule.openUsageSettings();
  }, []);

  return { openSettings, recheckPermission: check };
}