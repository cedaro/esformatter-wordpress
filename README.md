# esformatter-wordpress

> Format JavaScript according to the [WordPress Coding Standards](https://make.wordpress.org/core/handbook/coding-standards/javascript/).

## API

*esformatter-wordpress* is a light wrapper around [*esformatter*](https://github.com/millermedeiros/esformatter). It monkey-patches the `format()`, `diff.chars()`, and `diff.unified()` methods to load default plugins and set default options (see esformatter.json) to format JavaScript according to the WordPress Coding Standards.


## CLI

Install *esformatter-wordpress* globally to expose a simple command line interface:

`npm install -g esformatter-wordpress`

### Usage

Run `wpjs --help` to view the available options.

### Examples

```sh
# Preview a unified diff of changes.
wpjs -u <input>
```

```sh
# Update a file in place.
wpjs -i <input>
```

```sh
# Format a file and save to a new file.
wpjs <input> > <output>
```
