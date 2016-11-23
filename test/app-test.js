import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../src/components/app';
import { Button } from '../src/components/button';
import { Calendar } from '../src/components/calendar';

describe('App Component', function() {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it ('should have an initial show calendar state of false', function() {
    expect(wrapper.state().calendarShown).to.equal(false);
  });

  it ('should have two child elements', function() {
    expect(wrapper.children().length).to.equal(2);
  });

  describe('handleClick', function() {
    it ('should change the show state of the calendar', function(){
      wrapper.instance().handleClick();
      expect(wrapper.state().calendarShown).to.equal(true);
    });

    it ('should reset the bookings state', function() {
      wrapper.setState({ bookings: [{date: "day", time: "time"}] });
      wrapper.instance().handleClick();
      expect(wrapper.state().bookings).to.be.empty;
    })

    // Need test here to check that postData was called

  });

  // test for CSS transitions required

});
