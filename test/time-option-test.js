import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import TimeOption from '../src/components/time-option'

describe('TimeOption Component', function() {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TimeOption text={"Morning"}/>);
  });

  it ('should contain text from prop', function() {
    expect(wrapper.contains("Morning")).to.equal(true);
  });

  // it ('calls handleClick when clicked', function(){
  //   const handleClick = sinon.spy()
  //   const mount_wrapper = mount(<TimeOption onClick={handleClick}/>)
  //   mount_wrapper.find('.time').simulate('click');
  //   expect(handleClick).to.have.property('callCount', 1);
  // })

  // describe('handleClick', function() {
  //
  //   it ('should do something', function() {
  //
  //
  //   })
  //
  // })

})
