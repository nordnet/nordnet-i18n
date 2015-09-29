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
The promise is resolved with a string lang-COUNTRY. 

Example: 

```js
import {initialize} from '../lib/index';
const el = document.getElementById("myapp");
initialize(el).then(start);
const AppWithI18N = i18n(App);

function start(locale) {
  const intlData = // get the intlData for your locale, see below
  ReactDOM.render(<AppWithI18N {...intlData}/>,  el));
}
```

Example of intlData:

```js
const intlData = {
  locales: ['sv-SE'],
  messages: {
    title: {
      world: 'Värld',
    },
  },
}

```

### supportedLocales

Returns an array of locales that this library supports

Example:

```js
import {supportedLocales} from '../lib/index';
console.log('Supported locales: ' + supportedLocales().join(','));
```


### i18n

Wraps given React component with React context properties (`format`, `messages`, `locales`)
These properties can be used to translate or format values in a locale specific way.
You should use the i18n function at the root of your component tree. 
Each component that needs i18n functionality should use the translatable function, see below.
You should also provide the root component with translations for the locale.

Example:

```js
import {i18n} from '../lib/index';
class App extends React.Component {
  render() {
     // Your components, e.g. see MyComponent below 
  }
}
export default i18n(App);
```

### translatable

If you have wrapped your parent component with the `i18n` function (see above) you can use the `translatable` function. 
The `translatable` function will expose the `getIntlMessage` function as a property to your component.

 
Example:

```js
class MyComponent extends React.Component {
  render() {
    return (<h1>{this.props.getIntlMessage('title.world')}</h1>);
  }
}
export default translatable(MyComponent);
```
 

## Usage

See the complete [example](examples/) or [unit tests](lib/__tests__)


[npm-url]: https://npmjs.org/package/nordnet-i18n
[npm-image]: https://img.shields.io/npm/v/nordnet-i18n.svg

[travis-url]: https://travis-ci.org/nordnet/nordnet-i18n
[travis-image]: https://travis-ci.org/nordnet/nordnet-i18n.svg?branch=master

[depstat-url]: https://david-dm.org/nordnet/nordnet-i18n
[depstat-image]: https://david-dm.org/nordnet/nordnet-i18n.svg
