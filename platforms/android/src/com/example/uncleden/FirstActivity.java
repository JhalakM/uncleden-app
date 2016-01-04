package com.example.uncleden;

import android.os.Bundle;

import org.apache.cordova.CordovaActivity;

/**
 * Created by User on 10-12-2015.
 */
public class FirstActivity extends CordovaActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        loadUrl(launchUrl);

    }

}
