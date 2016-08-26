'use strict'

const fs = require('fs');
const cheerio = require('cheerio');
const models = require('./model-links.json');

let newArr = [];



fs.readFile('specs/spec1.html', (error, data) => {
  let $ = cheerio.load(data);
  let tableRows = $('#AutoNumber1 > tr');

  tableRows.each(function(i, el) {
    let specHeader = $(el).find('td:nth-child(1) p').text();
    let specText = $(el).find('td:nth-child(2) p').text();

    let modelName = models[i].name;

    newArr.push({
      name: modelName,
      specHeader: specHeader,
      specText: specText
    });
  });

  console.log(newArr.length);
});
