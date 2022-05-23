import React from 'react';
import { configure, mount } from 'enzyme';
import Card from './Components/Card';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import '@testing-library/jest-dom'

configure({ adapter: new Adapter() });

describe('Card', ()=>{
  let wrapper;
  beforeEach(() =>{
    wrapper = mount(<Card name="Juan" temperament="" weight="50-60"/>)
  })

  it('should render a h3', () => {
      expect(wrapper.find('h3')).toHaveLength(1)
      });
  it('h3 should render the name Juan passed by props', () => {
      expect(wrapper.find("h3").text()).toEqual("Juan");
    })
  it('should render a img tag', () => {
      expect(wrapper.find('img')).toHaveLength(1)
      });
  it('should render two p tags', () => {
      expect(wrapper.find('p')).toHaveLength(2)
      });
  it('first p should render the word Temperament:', () => {
      expect(wrapper.find("p").at(0).text()).toEqual("Temperament: ");
    })
  it('second p should render Weight', () => {
      expect(wrapper.find("p").at(1).text()).toEqual("Weight: 50-60");
    })
  });
