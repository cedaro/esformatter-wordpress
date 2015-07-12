# esformatter-wordpress

> Format JavaScript according to the [WordPress Coding Standards](https://make.wordpress.org/core/handbook/coding-standards/javascript/).

## API

*esformatter-wordpress* is a light wrapper around [*esformatter*](https://github.com/millermedeiros/esformatter). It monkey-patches the `format()`, `diff.chars()`, and `diff.unified()` methods to load default plugins and set default options (see esformatter.json) to format JavaScript according to the WordPress Coding Standards.
