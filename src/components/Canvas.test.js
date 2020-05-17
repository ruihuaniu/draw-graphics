import React from 'react'
import { shallow, mount } from 'enzyme'
import Canvas, { generateColors } from './Canvas'


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


    it('generateColors functions', () => {
        const generateColors = jest.fn()
        const wrapper = mount(<Canvas />)
        // console.log(wrapper.ref().debug());        
        expect(generateColors).toHaveBeenCalledTimes(1);
        expect(generateColors).toHaveBeenCalledWith(32, 128);
        // expect(generateColors(32, 128)).toBe(256);
    })
})