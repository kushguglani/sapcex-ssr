import React from 'react';
import { render, screen } from '@testing-library/react';
import Filter from '../filter/FilterContainer';

describe('FilterContainer', () => {
  it('renders default launch text in the filter container', () => {
    const filter = {
      selectedYear: '',
      successfullLaunch: '',
      successfullLanding: '',
    };
    render(<Filter filter={filter} />);
    const FiltersText = screen.getByText('Filters');
    expect(FiltersText).toBeInTheDocument();
  });
});
