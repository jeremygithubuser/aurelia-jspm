export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-validation')
    .plugin('aurelia-calendar-component')
    .plugin('aurelia-calendar-day-component') 
    .plugin('aurelia-navigation-component');
  aurelia.start().then(() => aurelia.setRoot("start"));
}