/**
 * esformatter-wordpress
 * https://github.com/cedaro/esformatter-wordpress
 *
 * @copyright Copyright (c) 2015 Cedaro, LLC
 * @license MIT
 */

'use strict';

var _tk = require('rocambole-token');
var _ws = require('rocambole-whitespace');

exports.nodeAfter = function(node) {
  if ('MemberExpression' !== node.type) {
    return;
  }

  var opening = _tk.findPrevNonEmpty(node.property.startToken);
  var closing = _tk.findNextNonEmpty(node.property.endToken);

  if (!opening || !closing || '[' !== opening.value || ']' !== closing.value) {
    return;
  }

  var type = node.property.startToken.type;
  if (node.property.startToken === node.property.endToken && ('String' === type || 'Numeric' === type)) {
    _ws.limitAfter(opening, 0); // MemberExpressionOpening
    _ws.limitBefore(closing, 0); // MemberExpressionClosing
  }
};
