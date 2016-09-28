describe('service: calculatorService', function(){
  var costsSample = [{'id':1,'type':'Small Package','dimensions':
  {'length':210,'breadth':280,'height':130},'cost':5},{'id':2,'type':'Medium Package','dimensions':
  {'length':280,'breadth':390,'height':180},'cost':7.5},{'id':3,'type':'Large Package','dimensions':
  {'length':380,'breadth':550,'height':200},'cost':8.5}];
  beforeEach(module('app'));

  it('should validatePackage', inject(function(calculatorService){
    var inputs = {length:210, breadth:280, height:130, weight:10};
    var dimensions = costsSample[0].dimensions;
    var result = calculatorService.validatePackage(dimensions, inputs);
    expect(result).toBeTruthy();
  }));

  it('should pickPackage', inject(function(calculatorService){
    var inputs = {length:220, breadth:300, height:130, weight:10};
    var result = calculatorService.pickPackage(costsSample, inputs);
    expect(result).toEqual(costsSample[1]);
  }));

  it('should pickIdealResults', inject(function(calculatorService){
    var inputs = {length:100, breadth:250, height:200, weight:10};
    var result = calculatorService.pickIdealResults(costsSample, inputs);
    var idealResults = {orderedInputs:{length: 200, breadth:250, height: 100}, result: costsSample[0], valid: true};
    expect(result).toEqual(idealResults);
  }));
});
