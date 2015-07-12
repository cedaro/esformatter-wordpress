/**
 * esformatter-wordpress
 * https://github.com/cedaro/esformatter-wordpress
 *
 * @copyright Copyright (c) 2015 Cedaro, LLC
 * @license MIT
 */

'use strict';

var deepMixIn = require('mout/object/deepMixIn');
var pluginOptions = require('./esformatter.json');

// Plugin dependencies.
var braces = require('esformatter-braces');
var dotNotation = require('esformatter-dot-notation');
var iifeSpacing = require('./lib/iife-spacing.js');
var jqueryChain = require('esformatter-jquery-chain');
var objectSpacingExceptions = require('./lib/object-spacing-exceptions.js');
var quoteProps = require('esformatter-quote-props');
var quotes = require('esformatter-quotes');
var removeTrailingCommas = require('esformatter-remove-trailing-commas');
var specialArguments = require('./lib/special-arguments.js');
var specialBangs = require('esformatter-special-bangs');


exports.setOptions = function(options) {
  deepMixIn(options, pluginOptions);
  jqueryChain.setOptions(options);
  quotes.setOptions(options);
  specialArguments.setOptions(options);
};

exports.transformBefore = function(ast) {
  dotNotation.transformBefore(ast);
};

exports.tokenBefore = function(token) {
  quotes.tokenBefore(token);
  removeTrailingCommas.tokenBefore(token);
};

exports.nodeBefore = function(node) {
    braces.nodeBefore(node);
    quoteProps.nodeBefore(node);
};

exports.nodeAfter = function(node) {
  iifeSpacing.nodeAfter(node);
  objectSpacingExceptions.nodeAfter(node);
  specialArguments.nodeAfter(node);
  specialBangs.nodeAfter(node);
};

exports.transformAfter = function(ast) {
  jqueryChain.transformAfter(ast);
};
