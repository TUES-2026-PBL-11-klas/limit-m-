package com.anonymous.frontend;

import android.app.usage.UsageEvents;
import android.app.usage.UsageStatsManager;
import android.app.AppOpsManager;
import android.content.Context;
import android.content.Intent;
import android.provider.Settings;

import com.facebook.react.bridge.*;

import java.util.HashMap;
import java.util.Map;

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
            AppOpsManager appOps =
                    (AppOpsManager) context.getSystemService(Context.APP_OPS_SERVICE);

            int mode = appOps.noteOpNoThrow(
                    "android:get_usage_stats",
                    android.os.Process.myUid(),
                    context.getPackageName()
            );

            promise.resolve(mode == AppOpsManager.MODE_ALLOWED);
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
    public void getUsage(double startMillis, double endMillis, Promise promise) {
        try {
            Context context = getReactApplicationContext();

            UsageStatsManager usm =
                    (UsageStatsManager) context.getSystemService(Context.USAGE_STATS_SERVICE);

            UsageEvents events =
                    usm.queryEvents((long) startMillis, (long) endMillis);

            UsageEvents.Event event = new UsageEvents.Event();

            Map<String, Long> foregroundMap = new HashMap<>();
            WritableArray sessions = Arguments.createArray();

            while (events.hasNextEvent()) {
                events.getNextEvent(event);

                String packageName = event.getPackageName();
                if (packageName == null) continue;

                switch (event.getEventType()) {

                    case UsageEvents.Event.MOVE_TO_FOREGROUND:
                        foregroundMap.put(packageName, event.getTimeStamp());
                        break;

                    case UsageEvents.Event.MOVE_TO_BACKGROUND:
                        if (foregroundMap.containsKey(packageName)) {

                            long startTime = foregroundMap.get(packageName);
                            long endTime = event.getTimeStamp();
                            foregroundMap.remove(packageName);

                            WritableMap map = Arguments.createMap();
                            map.putString("packageName", packageName);
                            map.putString("appName", getAppName(context, packageName));
                            map.putDouble("startTimestamp", startTime);
                            map.putDouble("endTimestamp", endTime);

                            sessions.pushMap(map);
                        }
                        break;
                }
            }

            promise.resolve(sessions);

        } catch (Exception e) {
            promise.reject("ERROR", e);
        }
    }

    private String getAppName(Context context, String packageName) {
        try {
            return context.getPackageManager()
                    .getApplicationLabel(
                            context.getPackageManager()
                                    .getApplicationInfo(packageName, 0)
                    ).toString();
        } catch (Exception e) {
            return packageName;
        }
    }
}