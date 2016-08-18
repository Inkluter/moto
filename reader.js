'use strict'

var json = require('./model-links.json');
var fs = require('fs');


for (var i = 0; i <json.length; i ++) {
  var link = json[i];

  json[i] = 'http://www.bmbikes.co.uk/' + link;
};

var json = JSON.stringify(json);

fs.writeFile('model-links.json', json);
