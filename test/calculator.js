let home = require('./home');

describe('calculator add test', function() {

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should choose MULTIPLICATION operator', function() {

    // another way
    // element(by.model('operator')).element(by.css("option[value='MULTIPLICATION']")).click();

    element(by.cssContainingText('option', '*')).click();
        
  })
    
  it('it should add', function(){

    home.enterFirstNumber('330');

    home.enterSecondNumber('3');

    home.clickGo();

    home.checkResult('333');

    browser.sleep(2000)
  })

  it('should divide', function() {

    home.enterFirstNumber('9');

    element(by.model('operator')).element(by.css("option[value='DIVISION']")).click();      

    home.enterSecondNumber('3');

    home.clickGo();

    home.checkResult('3');
    
  })

  it('should count modulo ', function() {

    home.enterFirstNumber('11');

    element(by.model('operator')).element(by.css("option[value='MODULO']")).click();      

    home.enterSecondNumber('2');

    home.clickGo();

    home.checkResult('1');
      
  })

  it('should multiplicate', function() {

    home.enterFirstNumber('3');

    element(by.model('operator')).element(by.css("option[value='MULTIPLICATION']")).click();      

    home.enterSecondNumber('7');

    home.clickGo();

    home.checkResult('21');
    
  })

  it('should subtract', function() {

    home.enterFirstNumber('10');

    element(by.model('operator')).element(by.css("option[value='SUBTRACTION']")).click();      

    home.enterSecondNumber('3');

    home.clickGo();

    home.checkResult('7');
    
  })

  it('should have a history', function() {
    home.add(1, 2);
    home.add(3, 4);
    
    expect(element(by.binding('latest')).getText()).toEqual('7');
  });


})

