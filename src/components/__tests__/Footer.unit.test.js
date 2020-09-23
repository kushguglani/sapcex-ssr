import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../footer/Footer';

describe('Footer', () => {
  it('renders default text in the footer', () => {
    render(<Footer />);
    const launchText = screen.getByText('Developed by:');
    expect(launchText).toBeInTheDocument();
  });
});
