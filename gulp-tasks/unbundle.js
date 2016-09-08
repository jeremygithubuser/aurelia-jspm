//http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/bundling-jspm/3
var gulp = require('gulp');
var unbundle = require('aurelia-bundler').unbundle;

var config = {
  force: true,
  baseURL: '.',                   // baseURL of the application
  configPath: './config.js',      // config.js file. Must be within `baseURL`
  bundles: {
    "dist/app-build": {           // bundle name/path. Must be within `baseURL`. Final path is: `baseURL/dist/app-build.js`.
      includes: [
        'app',
        'LambdaModule',
        'app.html!text',
        'src/*.css!text'
      ],
      options: {
        inject: true,
        minify: false
      }
    },
    "dist/vendor-build": {
      includes: [
        'aurelia-bootstrapper',
        'aurelia-framework'
      ],
      options: {
        inject: true,
        minify: true
      }
    }
  }
};

gulp.task('unbundle', function () {
  return unbundle(config);
});
