/**
 * esformatter-wordpress
 * https://github.com/cedaro/esformatter-wordpress
 *
 * @copyright Copyright (c) 2015 Cedaro, LLC
 * @license MIT
 */

'use strict';

var _ws = require('rocambole-whitespace');
var deepFillIn = require('mout/object/deepFillIn');

// These arguments have special rules if they are the first or last arguments
var specialTypes = {
      ArrayExpression: true,
      FunctionExpression: true,
      ObjectExpression: true
    };

function getArgumentType(arg) {
  var type = 'NewExpression';
  if (arg.type in specialTypes) {
    type += arg.type;
  }
  return type;
}

exports.setOptions = function(options) {
  var config = {
        NewExpressionArrayExpression: 0,
        NewExpressionFunctionExpression: 0,
        NewExpressionObjectExpression: 0
      };

  deepFillIn(options, {
    whiteSpace: {
      before: config,
      after: config
    }
  });

  _ws.setOptions({
    value: ' ',
    before: options.whiteSpace.before,
    after: options.whiteSpace.after
  });
};

exports.nodeAfter = function(node) {
  if (
    'NewExpression' !== node.type ||
    ! node.arguments.length
  ) {
    return;
  }

  var args = node.arguments;
  var firstArg = args[0];
  var lastArg = args[args.length - 1];

  _ws.limitBefore(firstArg.startToken, getArgumentType(firstArg));
  // @todo This seems to blank the whole thing out.
  _ws.limitAfter(lastArg.endToken, getArgumentType(lastArg));
};
