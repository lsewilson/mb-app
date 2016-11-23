import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import Button from '../src/button'


describe('Button Component', function() {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button text={"Schedule a viewing!"}/>);
  });

  it ('should have a class named schedule-button', function() {
    expect(wrapper.is('.button')).to.equal(true);
  })

  it ('should have one child element', function() {
    expect(wrapper.children().length).to.equal(1);
  })

  it ('should contain text from text prop', function() {
    expect(wrapper.text()).to.equal("Schedule a viewing!");
  })
  
  it ('is a clickable button', function(){
    const handleClick = sinon.spy()
    const mount_wrapper = mount(<Button onClick={handleClick}/>)
    mount_wrapper.find('.button').simulate('click');
    expect(handleClick).to.have.property('callCount', 1);
  })
})
