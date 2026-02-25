package com.anonymous.frontend;

import android.app.usage.UsageStats;
import android.app.usage.UsageStatsManager;
import android.app.AppOpsManager;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.provider.Settings;

import com.facebook.react.bridge.*;

import java.util.*;

public class UsageStatsModule extends ReactContextBaseJavaModule {

    public UsageStatsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "UsageStatsModule";
    }

    @ReactMethod
    public void hasUsagePermission(Promise promise) {
        try {
            Context context = getReactApplicationContext();
            AppOpsManager appOps = (AppOpsManager) context.getSystemService(Context.APP_OPS_SERVICE);
            int mode = appOps.noteOpNoThrow(
                    "android:get_usage_stats",
                    android.os.Process.myUid(),
                    context.getPackageName()
            );

            boolean granted = (mode == AppOpsManager.MODE_ALLOWED);
            promise.resolve(granted);
        } catch (Exception e) {
            promise.reject("ERROR", e);
        }
    }

    @ReactMethod
    public void openUsageSettings() {
        Intent intent = new Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getReactApplicationContext().startActivity(intent);
    }

    @ReactMethod
    public void getUsage(double startMillis, double endMillis, String intervalStr, Promise promise) {
        try {
            UsageStatsManager usm =
                    (UsageStatsManager) getReactApplicationContext()
                            .getSystemService(Context.USAGE_STATS_SERVICE);

            int interval = UsageStatsManager.INTERVAL_DAILY;
            switch (intervalStr.toLowerCase()) {
                case "daily": interval = UsageStatsManager.INTERVAL_DAILY; break;
                case "weekly": interval = UsageStatsManager.INTERVAL_WEEKLY; break;
                case "monthly": interval = UsageStatsManager.INTERVAL_MONTHLY; break;
                case "yearly": interval = UsageStatsManager.INTERVAL_YEARLY; break;
                case "best": interval = UsageStatsManager.INTERVAL_BEST; break;
            }

            List<UsageStats> stats =
                    usm.queryUsageStats(interval, (long)startMillis, (long)endMillis);

            if (stats == null || stats.isEmpty()) {
                promise.reject("NO_PERMISSION", "Usage access not granted");
                return;
            }

            WritableArray apps = Arguments.createArray();
            double totalScreenTime = 0;

            for (UsageStats usage : stats) {
                long time = usage.getTotalTimeInForeground();
                if (time > 0) {
                    totalScreenTime += time;

                    WritableMap map = Arguments.createMap();
                    map.putString("packageName", usage.getPackageName());
                    map.putDouble("timeSeconds", time / 1000.0);
                    apps.pushMap(map);
                }
            }

            WritableMap result = Arguments.createMap();
            result.putDouble("totalSeconds", totalScreenTime / 1000.0);
            result.putArray("apps", apps);

            promise.resolve(result);

        } catch (Exception e) {
            promise.reject("ERROR", e);
        }
    }
}