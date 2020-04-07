/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  const units                = ['mi', 'km', 'lbs', 'kg', 'gal', 'L'],
        correspondingUnits   = ['km', 'mi', 'kg', 'lbs', 'l', 'gal'],
        acceptableUnits      = ['MI', 'KM', 'LBS', 'KG', 'GAL', 'l'];
  
  this.getNum = function(input) {
    
    var result,
        index = input.search(/[a-zA-Z]/),
        inputSplitted;
    
    // in case no number has been typed, we consider it to be 1
    if(index == 0) {
      inputSplitted = ['1', input]
    } else {
      inputSplitted = [input.slice(0, index), input.slice(index)] }
    
    // let's check if it's a double fraction (it would then be an invalid input)
    if(inputSplitted[0].split('/').length > 2) {
      result='invalid number';
    } else { result=eval(inputSplitted[0]) }
    
    return result;
  };
  
  this.getUnit = function(input) {
    
    var result,
        index = input.search(/[a-zA-Z]/),
        inputSplitted,
        unit,
        i;
    
    if(index == 0) {
      inputSplitted = ['1', input]
    } else {
      inputSplitted = [input.slice(0, index), input.slice(index)] }
    
    unit = inputSplitted[1];
    if(units.includes(unit)) { result = unit}
    else if (acceptableUnits.includes(unit)) {
      i = acceptableUnits.indexOf(unit);
      result = units[i];
    }
    else { result = 'invalid unit'}
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    if(acceptableUnits.includes(initUnit)) {
      if(initUnit == 'l') {
        initUnit = 'L';
      } else { initUnit = initUnit.toLowerCase() }
    }
    if(units.includes(initUnit)) {
        result = correspondingUnits[units.indexOf(initUnit)];
    } else { result = 'invalid unit' }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result,
        i,
        spellOutUnits = ['miles', 'kilometers', 'pounds', 'kilograms', 'gallons', 'liters'];
    if(units.includes(unit)) {
      i = units.indexOf(unit);
    }
    else if(acceptableUnits.includes(unit)) {
      i = acceptableUnits.indexOf(unit);
    }
    result = spellOutUnits[i];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if(initNum == 'invalid number') {return 'Impossible to convert...'}
    switch(initUnit.toLowerCase()){
      case 'mi':
        result = parseFloat((initNum * miToKm).toFixed(5));
        break;
      case 'km':
        result = parseFloat((initNum / miToKm).toFixed(5));
        break;
      case 'lbs':
        result = parseFloat((initNum * lbsToKg).toFixed(5));
        break;
      case 'kg':
        result = parseFloat((initNum / lbsToKg).toFixed(5));
        break;
      case 'gal':
        result = parseFloat((initNum * galToL).toFixed(5));
        break;
      case 'l':
        result = parseFloat((initNum / galToL).toFixed(5));
        break;
      default:
        result = 'Impossible to convert...';
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = initNum + initUnit + ' converts to ' + returnNum + returnUnit;
    return result;
  };
  
}

module.exports = ConvertHandler;
