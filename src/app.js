import {Lambda} from './lambdaModule';
export class App {
  constructor() {
    this.message = 'Hello World of dev!';
    this.sayHello = () => { 
        var a = new Lambda();
        var b = a.method();
        return `Yo, ${this.message}! ${b}`
    }
  }
}