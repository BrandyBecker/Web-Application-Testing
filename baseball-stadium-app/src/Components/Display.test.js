import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test('renders without crashing', () => {
    render(<Display />)
});

test('Balls', () => {
    const { getByText } = render(<Display />)
    getByText(/balls/i);
})

test('Strikes', () => {
    const { getByText } = render(<Display />)
    getByText(/strikes/i);
})