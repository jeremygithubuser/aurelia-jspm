import {Gamma} from "greek";
export default class Lambda{
  constructor() {
    var a = new Gamma();
    var b = a.method();
    this.method = () => { return `this is from lambda method ${b}`; };
  }
}