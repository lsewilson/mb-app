import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Calendar from '../src/calendar'
import { MinimizeBox } from '../src/minimize-box'


describe('Calendar Component', function() {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calendar />);
  });

  it ('should have a class named calendar', function() {
    expect(wrapper.is('.calendar')).to.equal(true);
  });
  it ('should have one child element', function() {
    expect(wrapper.children().length).to.equal(2);
  });
  it ('should contain MinimizeBox', function() {
    expect(wrapper.containsMatchingElement(
      <MinimizeBox />)).to.equal(true);
  });
})
