export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-validation')
    .plugin('custom-components');
  aurelia.start().then(() => aurelia.setRoot("start"));
}