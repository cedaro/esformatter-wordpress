/**
 * esformatter-wordpress
 * https://github.com/cedaro/esformatter-wordpress
 *
 * @copyright Copyright (c) 2015 Cedaro, LLC
 * @license MIT
 */

'use strict';

var esformatter = require('esformatter');
var preset = require('./esformatter.json');
var deepMixIn = require('mout/object/deepMixIn');

var specialArguments = require('./lib/special-arguments.js');
esformatter.register(specialArguments);

var iifeSpacing = require('./lib/iife-spacing.js');
esformatter.register(iifeSpacing);

var objectSpacingExceptions = require('./lib/object-spacing-exceptions.js');
esformatter.register(objectSpacingExceptions);

var format = esformatter.format;
esformatter.format = function(str, opts) {
  opts = deepMixIn(preset, opts || {});
  return format.call(this, str, opts);
};

var diffChars = esformatter.diff.chars;
esformatter.diff.chars = function() {
  arguments[1] = deepMixIn(preset, arguments[1]);
  return diffChars.apply(this, arguments);
};

var diffUnified = esformatter.diff.unified;
esformatter.diff.unified = function() {
  arguments[1] = deepMixIn(preset, arguments[1]);
  return diffUnified.apply(this, arguments);
};

module.exports = esformatter;
