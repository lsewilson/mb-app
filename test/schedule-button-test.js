import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import ScheduleButton from '../components.js'


describe('ScheduleButton Component', function() {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ScheduleButton />);
  });

  it ('should have a class named schedule-button', function() {
    expect(wrapper.is('.schedule-button')).to.equal(true);
  })
  it ('should have one child element', function() {
    expect(wrapper.children().length).to.equal(1);
  })
  it ('should contain text "SCHEDULE A VIEWING!"', function() {
    expect(wrapper.text()).to.equal('SCHEDULE A VIEWING!');
  })
})
