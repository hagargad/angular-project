// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  baseApi :"http://127.0.0.1:8000/api",
  register_url: "http://127.0.0.1:8000/api/register",
  login_url : "http://127.0.0.1:8000/api/login",
  admin_url : "http://127.0.0.1:8000/api/admin-reg",
  loginAdmin__url : "http://127.0.0.1:8000/api/admin-log",
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
