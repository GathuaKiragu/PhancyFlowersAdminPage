/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    firebase:'https://maua-chapchap-2fc5a.firebaseapp.com',
    torii: {
      sessionServiceName: 'session',
      providers: {
        'firebase-simple-auth':{
        }
      }
    },
    'ember-simple-auth':{
      authenticationRoute: 'sessions',
      routeAfterAuthentication: 'posts',
    },
    modulePrefix: 'phancy-flowers-admin',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    firebase: {
      apiKey: "AIzaSyAA3A7L7ax6n-_YU61bBiMNFAA0KcOlX90",
      authDomain: "maua-chapchap-2fc5a.firebaseapp.com",
      databaseURL: "https://maua-chapchap-2fc5a.firebaseio.com",
      storageBucket: "maua-chapchap-2fc5a.appspot.com",
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
