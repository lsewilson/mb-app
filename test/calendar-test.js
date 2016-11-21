import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Calendar from '../src/components'


describe('Calendar Component', function() {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calendar />);
  });

  it ('should have a class named calendar', function() {
    expect(wrapper.is('.calendar')).to.equal(true);
  })
})
