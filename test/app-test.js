import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../src/app'

describe('App Component', function() {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it ('should have one child element', function() {
    expect(wrapper.children().length).to.equal(1);
  }); // brittle test?

  it ('should contain Button', function() {
    expect(wrapper.containsMatchingElement(
      <Button />)).to.equal(true);
  });

  // test for CSS transitions required

});
