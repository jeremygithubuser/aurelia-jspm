import Lambda from "Lambda";
export default class App {
  constructor() {
    var a = new Lambda();
    var b = a.method();
    this.message = `Hello World of dev! ${b}`;
    this.sayHello = () => {
      var a = new Lambda();
      var b = a.method();
      return `Yo, ${this.message}! ${b}`;
    };
  }
}