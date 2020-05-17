import React from 'react'
import { shallow, mount } from 'enzyme'
import Canvas from './Canvas'
import 'jest-canvas-mock';


describe('Canvas component', () => {

    const wrapper = shallow(<Canvas />);

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should have the className', () => {
        expect(wrapper.hasClass('container')).toBeTruthy();
    })

    it('should have the canvas element', () => {
        expect(wrapper.find('canvas').length).toBe(1);
    })

})