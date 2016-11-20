import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import ScheduleButton from '../components.js'


describe('ScheduleButton Component', function() {
  it ('should have a class named schedule-button', function() {
    expect(shallow(<ScheduleButton />).is('.schedule-button')).to.equal(true);
  })
})
