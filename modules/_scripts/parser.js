'use strict'

const request = require('request');
const http = require('http');
const cheerio = require('cheerio');
const Q = require('q');
const fs = require('fs');

let modelLinkArray = [];
var data = null;

var httpGet = function(url) {
  var deferred = Q.defer();
     http.get(url, deferred.resolve);
     return deferred.promise;
};


httpGet('http://www.bmbikes.co.uk/bmwmodels.htm')
  .then(function(res) {
    var deferred = Q.defer();

    res.on('data', function(chunk) {
      data += chunk;
    });
    res.on('end', function() {
      deferred.resolve();
    });

    return deferred.promise;
  })
  .then(function(){
    var deferred = Q.defer();

    var $ = cheerio.load(data);
    var links = $('#AutoNumber1 td a');


    links.each(function(i, el) {
      modelLinkArray.push(links[i].attribs.href)
    });

    deferred.resolve();

    return deferred.promise;
  })
  .then(function() {
    var newArr = [];

    for(var i = 0; i < modelLinkArray.length; i++) {
      if (modelLinkArray[i] !== undefined && modelLinkArray[i].indexOf('specpages') !== -1) {
        newArr.push(modelLinkArray[i]);
      }
    };

    var json = JSON.stringify(newArr);

    fs.writeFile('model-links.json', json);
  })
