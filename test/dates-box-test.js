import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import DatesBox from '../src/components/dates-box'


describe('DatesBox Component', function() {

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

  describe('handleChange', function() {

    it ('should call onSelectDay prop', function() {
      const handleDaySelection = sinon.spy()
      const mount_wrapper = mount(<DatesBox onSelectDay={handleDaySelection}/>)
      mount_wrapper.instance().handleChange()
      expect(handleDaySelection).to.have.property('callCount', 1);
    })
  })

})
