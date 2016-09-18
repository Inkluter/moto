'use strict'

const fs = require('fs');
const cheerio = require('cheerio');
const models = require('./model-links.json');

let newArr = [];



for (let i=0;i<models.length;i++) {
  let name = models[i].name;
  let specs = [];

  let data = fs.readFileSync('specs/spec' + i + '.html');

  let $ = cheerio.load(data);
  let tableRows = $('#AutoNumber1 > tr');

  tableRows.each(function(i, el) {
    let specHeader = $(el).find('td:nth-child(1) p').text().replace(/(\r\n|\n|\r)/gm," ").replace(/\s+/g," ").trim();
    let specText = $(el).find('td:nth-child(2) p').text().replace(/(\r\n|\n|\r)/gm," ").replace(/\s+/g," ").trim();

    specs.push({
      specHeader: specHeader,
      specText: specText
    });
  });


  newArr.push({
    name: name,
    specs: specs
  })
}

var json = JSON.stringify(newArr);

fs.writeFile('specs.json', json);
