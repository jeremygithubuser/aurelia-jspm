//http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/bundling-jspm/3
var gulp = require('gulp');
var bundle = require('aurelia-bundler').bundle;

var config = {
  force: true,
  baseURL: '.',                   // baseURL of the application
  configPath: './config.js',      // config.js file. Must be within `baseURL`
  bundles: {
    "dist/app-build": {           // bundle name/path. Must be within `baseURL`. Final path is: `baseURL/dist/app-build.js`.
      includes: [
        'src/app.js',
        'src/main.js',
        'src/*.html!text',
        'src/*.css!text'
      ],
      options: {
        inject: true,
        minify: false
      }
    },
    "dist/vendor-build": {
      includes: [
        'aurelia-binding',
        'aurelia-bootstrapper',
        'aurelia-dependency-injection',
        'aurelia-event-aggregator',
        'aurelia-framework',
        'aurelia-history-browser',
        'aurelia-loader-default',
        'aurelia-loader',
        'aurelia-logging-console',
        'aurelia-metadata',
        'aurelia-pal-browser',
        'aurelia-polyfills',
        'aurelia-route-recognizer',
        'aurelia-router',
        'aurelia-task-queue',
        'aurelia-templating-binding',
        'aurelia-templating-resources',            
        'aurelia-templating-router',
        'aurelia-templating'
      ],
      options: {
        inject: true,
        minify: true
      }
    }
  }
};

gulp.task('bundle', function () {
  return bundle(config);
});
