import React from 'react';
import Renderer from 'react-test-renderer';

import MagicComponent from '../src/MagicComponent.jsx';

test('adds 1 + 2 to equal 3', () => {
    var mc = new MagicComponent();
    
    expect(mc.sum(1, 2)).toBe(3);
});

