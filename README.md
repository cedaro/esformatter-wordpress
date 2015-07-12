# esformatter-wordpress

> An [*esformatter*](https://github.com/millermedeiros/esformatter) plugin to format JavaScript according to the [WordPress Coding Standards](https://make.wordpress.org/core/handbook/coding-standards/javascript/).


## Installation

```sh
npm install esformatter-wordpress
```


## Usage

There are various ways to register *esformatter-wordpress* depending on how you're using *esformatter*.

### API

When working with *esformatter* programmatically:

```js
var esformatter = require('esformatter');
var wordpressPreset = require('esformatter-wordpress');

esformatter.register(wordpressPreset);
```

### CLI

When using the [*esformatter* CLI](https://github.com/millermedeiros/esformatter#cli), register it as a plugin:

```sh
esformatter --plugins=esformatter-wordpress <input.js>
```

### Configuration Files

It's also possible to register *esformatter-wordpress* in a project, either in an `.esformatter` configuration file in the project root, your home directory, or in a section in `package.json`. Read the [configuration documentation](https://github.com/millermedeiros/esformatter/blob/master/doc/config.md) for more information.

#### .esformatter

```json
{
  "plugins": [
    "esformatter-wordpress"
  ]
}
```

#### package.json

```json
{
  "esformatter": {
    "plugins": [
      "esformatter-wordpress"
    ]
  }
}
```


## Changelog

### 0.2.0

* Reworked the package to make it an *esformatter* plugin.
* Removed the `wpjs` CLI utility in favor of using the `esformatter` CLI directly.
