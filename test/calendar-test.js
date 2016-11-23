import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Calendar from '../src/components/calendar'
import { MinimizeBox } from '../src/components/minimize-box'


describe('Calendar Component', function() {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calendar calendarShown={true}/>);
  });

  it ('should have a class named calendar', function() {
    expect(wrapper.is('.calendar')).to.equal(true);
  });

  it ('should have three child elements', function() {
    expect(wrapper.children().length).to.equal(4);
  });

  it ('should contain MinimizeBox', function() {
    expect(wrapper.containsMatchingElement(
      <MinimizeBox />)).to.equal(true);
  });

  it ('should have a calendarShown prop', function (){
     expect(wrapper.instance().props.calendarShown).to.exist;
  })

  describe('handleDaySelection', function() {

    it ('should change the currentDay state', function() {
      wrapper.instance().handleDaySelection('Monday')
      expect(wrapper.state().currentDay).to.equal('Monday')
    })

  })

})
