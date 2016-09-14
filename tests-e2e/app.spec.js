describe('aurelia app', function () {
    beforeEach(() => {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:8080');
        browser.sleep(1000);
    });

    it('should load the page', function () {
        expect(browser.getTitle()).toBe('Aurelia');
        browser.sleep(1000);
    });

    it('should have proper header text set', () => {
        expect(element(by.id('appTitle')).getText()).toBe('Hello World of dev! this is from lambda method this is from gamma method');
    });

    it('should write something in the page', () => {
      element(by.id('appInput')).sendKeys("Aurelia et jspm c'est super!");
      browser.sleep(1000);
      expect(element(by.id('appContent')).getText()).toContain("Aurelia et jspm c'est super!");
      browser.sleep(1000);
  });
});