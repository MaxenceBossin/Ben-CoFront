// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase:{
    apiKey: "AIzaSyAPWU6z4Gx4bJckOFzGtYJYBUM9fHUYQ8M",
    authDomain: "firechat-407a8.firebaseapp.com",
    databaseURL: "https://firechat-407a8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "firechat-407a8",
    storageBucket: "firechat-407a8.appspot.com",
    messagingSenderId: "645327659698",
    appId: "1:645327659698:web:022ef197e295174b709fab",
    measurementId: "G-6CJ2QMMNEP"
  },
  production: true,
  api_url: 'http://localhost:8000/api/',
  api_url_login: 'http://localhost:8000/authentication_token',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
