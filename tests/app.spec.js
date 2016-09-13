import {ComponentTester} from "aurelia-testing";
import {bootstrap} from "aurelia-bootstrapper";
import App from "src/App.js";
import appView from "src/App.html!text";

describe('AppComponent', () => {
  let component;

  beforeEach(() => {
  });

  it('should render The Title of the app', done => {
    component = new ComponentTester();
    component.boundTo(new App());
    component.inView(appView.replace(/(^<template>|<\/template>$)/g,""));
    component.create(bootstrap).then(() => {
      const nameElement = document.querySelector("#appTitle");
      expect(nameElement.innerHTML).toBe('Hello World of dev! this is from lambda method');
      done();
    });
  });

  afterEach(() => {
    component.dispose();
  });
});