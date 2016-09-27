package com.sumreact.local;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.common.MapBuilder;

import java.util.Map;

/**
 * Created by Summer on 2016/9/27.
 */

public class RnToastModule extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public RnToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = MapBuilder.newHashMap();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @Override
    public String getName() {
        return "Toast";
    }

    @ReactMethod
    public void show(final String message, final int duration) {
        Log.e("RN","RN do show...........");
        UiThreadUtil.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(getReactApplicationContext(), message, duration).show();
            }
        });
    }
}
