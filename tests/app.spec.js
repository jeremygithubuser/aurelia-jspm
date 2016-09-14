import {ComponentTester} from "aurelia-testing";
import {bootstrap} from "aurelia-bootstrapper";
import App from "App";
import appView from "App.html!text";

describe('AppComponent', () => {
  let component;

  beforeEach(() => {
  });

  it('should render The Title of the app', done => {
    component = new ComponentTester();
    var sut = new App();
    component.boundTo(sut);
    component.inView(appView.replace(/(^<template>|<\/template>$)/g, ""));
    component.create(bootstrap).then(() => {
      const titleElement = document.querySelector("#appTitle");
      expect(titleElement.innerHTML).toBe("Hello World of dev! this is from lambda method this is from gamma method");
      done();
    });
  });

  it('should render The content of the app', done => {
    component = new ComponentTester();
    var sut = new App();
    sut.content = "hey this is the content";
    component.boundTo(sut);
    component.inView(appView.replace(/(^<template>|<\/template>$)/g, ""));
    component.create(bootstrap).then(() => {
      const element = document.querySelector("#appContent");
      console.log("app content");
      console.log(element.innerHTML);
      expect(element.innerHTML).toBe("hey this is the content");
      done();
    });
  });

  afterEach(() => {
    component.dispose();
  });
});