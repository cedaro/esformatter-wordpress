/*global describe:false, it:false */

'use strict';

var fs = require('fs');
var path = require('path');
var esformatter = require('esformatter');
var expect = require('chai').expect;

var wordpressPreset = require('../');
esformatter.register(wordpressPreset);

var readFile = function(folder, name) {
  var filePath = path.join('./test', folder, name);
  return fs.readFileSync(filePath).toString();
};

describe('should format the file to match the WordPress coding standards', function() {
  var files = fs.readdirSync('./test/fixtures/');
  files.forEach(function(file) {
    it('should format fixture ' + file + ' and equal expected file', function() {
      var input = readFile('fixtures', file);
      var actual = esformatter.format(input);
      var expected = readFile('expected', file);
      expect(actual).to.equal(expected, 'file comparison failed: ' + file);
    });
  });
});
