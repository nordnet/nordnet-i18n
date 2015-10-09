import React from 'react';
import {translatable} from '../lib/index';

class Greeting extends React.Component {
  render() {
    return (
      <div className='greeting'>
        Hello {this.props.getIntlMessage('title.world')}
      </div>
    );
  }
}

export default translatable(Greeting);

