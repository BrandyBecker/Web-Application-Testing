import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders without crashing', () => {
    render(<Dashboard />)
});

test('strike', () => {
    const { getByText } = render(<Dashboard />)
    getByText(/strike/i);
})

test('ball', () => {
    const { getByText } = render(<Dashboard />)
    getByText(/ball/i);
})
test('foul', () => {
    const { getByText } = render(<Dashboard />)
    getByText(/foul/i);
})

test('hit', () => {
    const { getByText } = render(<Dashboard />)
    getByText(/hit/i);
})