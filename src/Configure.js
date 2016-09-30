export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-validation')
    .plugin('custom-components')
    .plugin('aurelia-calendar-component'); 
  aurelia.start().then(() => aurelia.setRoot("start"));
}