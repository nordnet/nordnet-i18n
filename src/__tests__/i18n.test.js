import '../initialize-intl';
import i18n from '../i18n.jsx';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

describe('i18n', () => {
  function renderI18NParentWithProps(Component, props) {
    const App = i18n(Component);
    const tree = TestUtils.renderIntoDocument(
      <App {...props}/>
    );
    return tree;
  }

  function createComponentWithContextTypes() {
    return React.createClass({
      contextTypes: {
        formats: React.PropTypes.object.isRequired,
        messages: React.PropTypes.object.isRequired,
        locales: React.PropTypes.array.isRequired,
      },
      render() {return (<div/>); },
    });
  }

  const locales = [1, 2, 3];
  const formats = {foo: 'bar'};
  const messages = {baaz: 'baaz'};

  let component;

  beforeEach(() => {
    const Component = createComponentWithContextTypes();
    const tree = renderI18NParentWithProps(Component, {formats, locales, messages});
    component = TestUtils.findRenderedComponentWithType(tree, Component);
  });

  describe('when parent is given property: "format"', () => {
    it('expose the format context', () => expect(component.context.formats).to.equal(formats));
  });

  describe('when parent is given property: "messages"', () => {
    it('expose the messages context', () => expect(component.context.messages).to.equal(messages));
  });

  describe('when parent is given property: "locales"', () => {
    it('expose the locales context', () => expect(component.context.locales).to.equal(locales));
  });
});
