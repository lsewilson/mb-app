import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../src/app';
import { Button } from '../src/button';
import { Calendar } from '../src/calendar';



describe('App Component', function() {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it ('should have an initial show calendar state of false', function() {
    expect(wrapper.state().calendarShown).to.equal(false)
  });

  it ('should have two child elements', function() {
    expect(wrapper.children().length).to.equal(2);
  });

  // it ('should contain Button component', function() {
  //   expect(wrapper.containsMatchingElement(
  //     <Button />)).to.equal(true);
  // });
  //
  // it ('should contain Calendar component', function() {
  //   expect(wrapper.containsMatchingElement(
  //     <Calendar />)).to.equal(true);
  // });

  describe('handleClick', function() {
    it ('should change the show state of the calendar', function(){
      wrapper.instance().handleClick()
      expect(wrapper.state().calendarShown).to.equal(true)
    });

  });

  // test for CSS transitions required

});
