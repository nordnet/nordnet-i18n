import React from "react";
import Greeting from "./greeting";

//
import {initialize} from '../lib/index';

const sv = {
  locales: ['sv-SE'],
  messages: {
    foo: {
      title: 'Hej'
    }
  },
}

console.log('initialize', initialize);

let element = undefined; // TODO
initialize(document.body).then(start);

function start(locale) {
  const intlData = {'sv-SE': sv}

  console.log('got locale', locale);

  React.render(
    <Greeting name="World"/>,
    document.body
  );


}