import React from 'react';
import {i18n} from '../lib/index';

class Greeting extends React.Component {
  render() {
    return (
      <div className='greeting'>
        Hello {this.context.translate('title.world')}
      </div>
    );
  }
}

export default i18n(Greeting);

