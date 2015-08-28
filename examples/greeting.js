import React from "react";
import {i18n} from '../lib/index';


class Greeting extends React.Component {
  render() {
    return (
      <div className="greeting">
        Hello, {this.context.translate('WORLD')}
      </div>
    );
  }
}

Greeting.contextTypes = {
  translate: React.PropTypes.func.isRequired,
};

export default i18n(Greeting);