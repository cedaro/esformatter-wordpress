/**
 * esformatter-wordpress
 * https://github.com/cedaro/esformatter-wordpress
 *
 * @copyright Copyright (c) 2015 Cedaro, LLC
 * @license MIT
 * @link https://github.com/jquery/contribute.jquery.org/pull/104
 * @link https://github.com/millermedeiros/esformatter/commit/ade4e1eeb444d88f9df2aac8e229d475fe2e8594
 */

'use strict';

var _ws = require('rocambole-whitespace');

// These arguments have special rules if they are the first or last arguments
var specialTypes = {
      ArrayExpression: true,
      FunctionExpression: true,
      ObjectExpression: true
    };

_ws.setOptions({
  before: {
    ArgumentList: 1,
    ArgumentListArrayExpression: 0,
    ArgumentListFunctionExpression: 0,
    ArgumentListObjectExpression: 0
  },
  after: {
    ArgumentList: 1,
    ArgumentListArrayExpression: 0,
    ArgumentListFunctionExpression: 0,
    ArgumentListObjectExpression: 0
  }
});

function getArgumentType( arg ) {
  var type = 'ArgumentList';
  if (arg.type in specialTypes) {
    type += arg.type;
  }
  return type;
}

module.exports = {
  nodeAfter: function( node ) {
    if ('CallExpression' !== node.type || ! node.arguments.length) {
      return;
    }

    var args = node.arguments;
    var firstArg = args[0];
    var lastArg = args[ args.length - 1 ];

    _ws.limitBefore( firstArg.startToken, getArgumentType( firstArg ) );
    _ws.limitAfter( lastArg.endToken, getArgumentType( lastArg ) );
  }
};
