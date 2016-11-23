import React from 'react';
import { expect } from 'chai';
// import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import TimeOption from '../src/components/time-option'

describe('TimeOption Component', function() {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TimeOption
      text={"Morning"}
      currentDay={"Wednesday"}
      bookings={[]}/>
    );
  });

  it ('should contain text from prop', function() {
    expect(wrapper.contains("Morning")).to.equal(true);
  });

  it ('should have a bookings prop', function (){
     expect(wrapper.instance().props.bookings).to.exist;
  })

  describe('handleClick', function() {

    it ('should push booking day data to bookings prop', function() {
      wrapper.instance().handleClick();
      expect(wrapper.instance().props.bookings[0].date).to.equal("Wednesday");
    });

    it ('should push booking time data to bookings prop', function() {
      wrapper.instance().handleClick();
      expect(wrapper.instance().props.bookings[0].time).to.equal("Morning");
    })

    it ('should remove booking day data to bookings prop if it already exists', function() {
      let wrapper2 = shallow(
        <TimeOption
        text={"Morning"}
        currentDay={"Wednesday"}
        bookings={[{date: "Wednesday", time: "Morning"}]}/>
      );
      wrapper2.instance().handleClick();
      expect(wrapper2.instance().props.bookings).to.be.empty;
    })

  })

})
