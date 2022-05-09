let flights = function() {

  this.getURL = (url) => browser.get(url);

  this.getElement = (selector) => element(by.css(selector));

  this.getContainingText = (selector, expectedResult) => element(by.cssContainingText(selector, expectedResult));

  this.conditionalStatement = (element, bool) => expect(element.isPresent()).toBe(bool);

  this.equalStatment = (element, text) => expect(element.getText()).toEqual(text);
}

module.exports = new flights();