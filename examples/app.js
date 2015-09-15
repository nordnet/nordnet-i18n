// To get it working on react 0.13 see https://github.com/facebook/react/issues/3451

import React from 'react';
var ReactDOM = require('react-dom');
import Greeting from './greeting';
import {initialize} from '../src/index';

const intlData = {
  locales: ['sv-SE'],
  messages: {
    title: {
      world: 'Värld',
    },
  },
}

initialize(document.body).then(start);

function start(locale) {
  ReactDOM.render(
    <h2>
      <span>{locale}</span>
        <Greeting name='World' {...intlData}/>
    </h2>,
    document.body
  );
}
