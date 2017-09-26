import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import MagicComponent from '../src/MagicComponent.jsx';
import style from '../src/css/style.scss';

let mount = Enzyme.mount;
let shallow = Enzyme.shallow;

test('Component loads with correct class', () => {
    expect(shallow(<MagicComponent/>).hasClass(style.color1)).toBe(true);
});

test('Component toggles class on a click', () => {
    let mc = shallow(<MagicComponent/>);

    mc.simulate('click');
    expect(mc.hasClass(style.color2)).toBe(true);
    expect(mc.hasClass(style.color1)).toBe(false);
});

test('Component toggles class again on a second click', () => {
    let mc = shallow(<MagicComponent/>);

    mc.simulate('click');
    mc.simulate('click');

    expect(mc.hasClass(style.color2)).toBe(false);
    expect(mc.hasClass(style.color1)).toBe(true);
});
