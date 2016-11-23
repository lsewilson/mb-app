import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import TimesBox from '../src/components/times-box'
import TimeOption from '../src/components/time-option'

describe('TimesBox Component', function() {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TimesBox />);
  });

  it ('should have three TimeOption components', function() {
    expect(wrapper.find(TimeOption)).to.have.length.of(3);
  });

})
