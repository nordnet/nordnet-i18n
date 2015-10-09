import React from 'react';
import TestUtils from 'react-addons-test-utils';

import translatable from '../translatable';
import i18n from '../i18n';

describe('translatable', () => {
  class MyComponent extends React.Component {
    render() {
      return (<div></div>);
    }
  }

  let component;

  beforeEach(() => {
    const Wrapper = i18n(translatable(MyComponent));
    const tree = TestUtils.renderIntoDocument(React.createElement(Wrapper, {messages: {}, locales: [], formats: {}}));
    component = TestUtils.findRenderedComponentWithType(tree, MyComponent);
  });

  it('expose the translatable function as a prop', () => expect(component.props.getIntlMessage).to.be.a('function'));
});

