import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import MinimizeBox from '../src/minimize-box'


describe('MinimizeBox Component', function() {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MinimizeBox />);
  });

  it ('should have a class named minimize-box', function() {
    expect(wrapper.is('.calendar')).to.equal(true);
  });

  it ('should have one child element', function() {
    expect(wrapper.children().length).to.equal(1);
  })
  // it ('should have a child element which is an image', function() {
  //   const image = wrapper.find('img');
  //   console.log(image.prop('src'));
  //   assert.equal(image.prop('src'), "something");
  // })
})