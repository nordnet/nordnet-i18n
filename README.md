# Nordnet i18n library

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][depstat-image]][depstat-url]

This library does the following things:
* Returns the locale of the user
* Loads [Intl](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl) locale configuration.
* Wraps React components in order to expose some i18n methods.

## Installation

### NPM

```sh
npm install --save nordnet-i18n
```

## API

### initialize 

Gets the locale of the user and downloads Intl configuration.
It first check if `data-lang` and `data-country` attributes is given in the provided element.
If these attributes are not found it will make a request to the Nordnet API which will return the locale of the user. 
The locale is then used to download the Intl locale configuration (using the webpack code splitting feature).
The promise is resolved with a string LANG-COUNTRY. 

Example: 

```js
import {initialize} from '../lib/index';
var myapp = document.getElementById("myapp");
initialize(myapp).then((locale) => console.log('initialized with locale ' + locale}
```

### supportedLocales

Returns an array of locales that this library supports

Example:

```js
import {supportedLocales} from '../lib/index';
console.log('Supported locales: ' + supportedLocales().join(','));
```


### i18n

Wraps a provided React component with React context properties (`format`, `messages`, `locales`, `translate`)
These properties can be used to translate or format values in a locale specific way.

Example:

```js
import {i18n} from '../lib/index';
class MyComponent extends React.Component {
    render() {
      return (<h2>{this.context.translate(this.props.title)}</h2>);
    }
  }
    
  var intlData = {
    messages: {} // Your translations 
  }
  
  export default i18n(MyComponent);
```

 

## Usage

See the complete [example](examples/) or [unit tests](lib/__tests__)
