// Unused at the moment, but may replace the current `wpjs` script functionality
// in the future.

var fs = require('fs');
var spawn = require('child_process').spawn;

var args = process.argv.slice(2).concat([
  '--config',
  'esformatter.json'
]);

if (-1 !== args.indexOf('-u')) {
  args.push('--diff-unified');
}

var child = spawn(
  'node_modules/.bin/esformatter',
  args,
  {
    cwd: process.cwd(),
    stdio: 'inherit'
  }
);

child.on('close', function(code) {
  process.exit(code);
});
