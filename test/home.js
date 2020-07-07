let home = function() {

    let firstOperatorInput = element(by.model('first'));
    let seconndOperatorInput = element(by.model('second'));
    let goButton =  element(by.css('[ng-click="doAddition()"]'));
    let res = element(by.css('h2.ng-binding'));
    let selectOperator


    this.get = function(url) {
        browser.get(url);
    };

    this.enterFirstNumber = function(key) {
        firstOperatorInput.sendKeys(key);
    };

    this.enterSecondNumber = function(key) {
        seconndOperatorInput.sendKeys(key);
    };

    this.clickGo = function() {
        goButton.click();
    };

    this.checkResult = function(result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    };

    this.add = function (a, b) {
        firstOperatorInput.sendKeys(a);
        seconndOperatorInput.sendKeys(b);
        goButton.click();
      }
}

module.exports = new home();