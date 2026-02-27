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