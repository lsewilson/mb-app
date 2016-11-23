import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import DatesBox from '../src/dates-box'


describe('Calendar Component', function() {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DatesBox />);
  });

  it ('should have a class named dates-box', function() {
    expect(wrapper.is('.dates-box')).to.equal(true);
  });
  it ('should have 5 items with the "date" class', function() {
    expect(wrapper.find('.date')).to.have.length.of(5);
  });

})
