'use strict'

const fs = require('fs');


let arr = require('./specs-raw.json');
let newArr = [];


function model() {
  // name: '',
  // specs: {
  //   main: {},
  //   enngine: {},
  //   transmission: {},
  //   electric: {},
  //   chassis: {},
  //   dimensions: {}
  // }
};

let subArr = ['Start of Production', 'Engine', 'Transmission', 'Clutch', 'Electrical System', 'Chassis', 'Dimensions/Weights'];



for (var i = 0; i<arr.length; i++) {

  let model = arr[i];

  // lets work only with first element


    let newModel = {};
    newModel.name = model.name;
    newModel.specs = [];

    // holds last iterstion step, for make new subtree
    let lastIndex = 0;

    // go through specs array
    for (var j = 0; j<model.specs.length; j++ ) {
      if (model.specs[j].specHeader.length > 2 && model.specs[j].specHeader.length < 40) {
        newModel.specs.push(model.specs[j]);
      }
    }

    newArr.push(newModel);


}

var json = JSON.stringify(newArr);
fs.writeFile('specs.json', json);



// let str = arr[0].specs[0].specHeader.replace(/(\r\n|\n|\r)/gm," ").replace(/\s+/g," ").trim();
//
// console.log(arr[1].specs.length);

// console.log(arr[0]);
