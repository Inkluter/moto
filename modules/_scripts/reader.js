'use strict'


const fs = require('fs');
const http = require('http');
const cheerio = require('cheerio');
const Q = require('q');

let arr = require('./model-links.json');
let newArr = [];

for (let i=0;i<arr.length;i++) {
  let modelName = arr[i].slice(10);
  let newName = '';

  for (let u=0;u<modelName.length;u++) {
    if (modelName.charAt(u) == '.') { break };

    newName += modelName.charAt(u);
  };

  newArr.push({
    name: newName,
    link: 'http://www.bmbikes.co.uk/specpages/' + arr[i]
  });
};

var json = JSON.stringify(newArr);

fs.writeFile('model-links.json', json);
