// To get it working on react 0.13 see https://github.com/facebook/react/issues/3451

import React from 'react';
const ReactDOM = require('react-dom');
import Greeting from './greeting';
import {initialize, i18n} from '../lib/index';

const intlData = {
  formats: {},
  locales: ['sv-SE'],
  messages: {
    title: {
      world: 'Värld',
    },
  },
}

initialize(document.body).then(start);

class App extends React.Component {
  render() {
    return (<Greeting name='World'/>);
  }
}

const AppWithI18N = i18n(App);

function start(locale) {
  ReactDOM.render(
    <h2>
      <span>{locale}</span>
        <AppWithI18N {...intlData}/>
    </h2>,
    document.body
  );
}
