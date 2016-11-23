import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import DateOption from '../src/components/date-option'

describe('DateOption Component', function() {

  let wrapper;
  let date;

  beforeEach(() => {
    date = "Wed,23,Nov";
    wrapper = shallow(<DateOption dateValue={date}/>);
  });

  it ('should show the correct day', function() {
    expect(wrapper.contains('Wed')).to.equal(true);
  });

  it ('should show the correct date', function() {
    expect(wrapper.contains('23')).to.equal(true);
  });

  it ('should show the correct month', function() {
    expect(wrapper.contains('Nov')).to.equal(true);
  });


})
