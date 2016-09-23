'use strict'

const fs = require('fs');


let arr = require('./specs-raw.json');
let newArr = [];


// subarr
let subArr = [
  {
    name: 'production',
    text: 'Production'
  },
  {
    name: 'engine',
    text: 'Engine'
  },
  {
    name: 'transmission',
    text: 'Power Transmission'
  },
  {
    name: 'electrical',
    text: 'Electrical System'
  },
  {
    name: 'chassis',
    text: 'Chassis'
  },
  {
    name: 'weights',
    text: 'Dimensions/Weights'
  }

];





// last index
let lastIndex = 0;
let lastSubArrIndex = 0;



// main cycle
for (var i=0; i<arr.length; i++) {

  lastSubArrIndex = 0;

  let model = arr[i];
  let newModel = {};
  newModel.name = model.name;
  newModel.specs = {};

  let spec = '';

  // item specs cycle
  for (var j=0; j<model.specs.length; j++) {
    // if (subArr[lastSubArrIndex] == undefined) {
    //   break;
    // }

    if (subArr[lastSubArrIndex] && model.specs[j].specHeader == subArr[lastSubArrIndex].text) {
      spec = subArr[lastSubArrIndex].name;
      newModel.specs[spec] = [];
      lastSubArrIndex++;
    }else{

    newModel.specs[spec].push({
      header: model.specs[j].specHeader,
      text: model.specs[j].specText
    });
  }

  }

  newArr.push(newModel);

}

let json = JSON.stringify(newArr);

fs.writeFile('new-2.json', json)
