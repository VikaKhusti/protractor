const { browser } = require("protractor")

var calc = function() {
    this.Given("Open protractor website", function(callback){
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(5000);
        callback();
    })
}

module.exports = calc;