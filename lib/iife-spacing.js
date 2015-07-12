/**
 * esformatter-wordpress
 * https://github.com/cedaro/esformatter-wordpress
 *
 * @copyright Copyright (c) 2015 Cedaro, LLC
 * @license MIT
 */

'use strict';

var _parens = require('esformatter/lib/hooks/expressionParentheses');
var _tk = require('rocambole-token');
var _ws = require('rocambole-whitespace');

exports.nodeAfter = function(node) {
  if ('CallExpression' !== node.type || 'FunctionExpression' !== node.callee.type) {
    return;
  }

  var opening = _tk.findPrev(node.endToken, '(');

  var parens = _parens.getParentheses({
    type: 'Special',
    startToken: node.startToken,
    endToken: node.endToken
  });

  if (opening && parens) {
    // Remove space before IIFE calling block.
    _ws.limitBefore(opening, 0);
  }
};
