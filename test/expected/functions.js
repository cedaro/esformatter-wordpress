// Always include extra spaces around elements and arguments:
foo( arg );

foo( 'string', object );

foo( options, object[ property ] );

foo( node, 'property', 2 );

// Function with a callback, object, or array as the sole argument:
// No space on either side of the argument
foo(function() {
	// Do stuff
});

foo({
	a: 'alpha',
	b: 'beta'
});

foo([
	'alpha',
	'beta'
]);

// Function with a callback, object, or array as the first argument:
// No space before the first argument
foo(function() {
	// Do stuff
}, options );

// Function with a callback, object, or array as the last argument:
// No space after after the last argument
foo( data, function() {
	// Do stuff
});
