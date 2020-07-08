const { browser } = require("protractor")
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let home = require('../test/home');

let firstOperatorInput = element(by.model('first'));
let seconndOperatorInput = element(by.model('second'));
let goButton =  element(by.css('[ng-click="doAddition()"]'));
let res = element(by.css('h2.ng-binding'));
let selectOperator

var calc = function() {
    this.Given("Open protractor website", function(callback){
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);
        callback();
    })

    this.When("User add two numbers", function(callback) {
        firstOperatorInput.sendKeys('2');
        seconndOperatorInput.sendKeys('3');
        goButton.click();
        callback();
    })

    this.Then("Result must be equal 5", function(callback) {
        let output = element(by.cssContainingText('.ng-binding', 5));
        return expect(output.getText()).equal(5);
    })
}

module.exports = calc;