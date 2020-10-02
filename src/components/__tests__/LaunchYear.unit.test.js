import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LaunchYear from '../filter/LaunchYear';

describe('LaunchYear', () => {
  it('renders default Launch text', () => {
    const filter = {
      selectedYear: '',
      successfullLaunch: '',
      successfullLanding: '',
    };
    render(<LaunchYear filter={filter} text="Launch Year" />);
    const launchText = screen.getByText('Launch Year');
    expect(launchText).toBeInTheDocument();
  });
  it('toogle filter launch value on click', () => {
    const toggleSuccessFullSpy = jest.fn();
    const setFilterSpy = jest.fn();
    const setDisplaySpinner = jest.fn();
    const fetchAppsIfNeeded = jest.fn();
    const filter = {
      selectedYear: '',
      successfullLaunch: '',
      successfullLanding: '',
    };
    render(
      <LaunchYear
        filter={filter}
        setFilter={setFilterSpy}
        toggleSuccessFull={toggleSuccessFullSpy}
        setDisplaySpinner={setDisplaySpinner}
        fetchAppsIfNeeded={fetchAppsIfNeeded}
      />
    );

    const button = screen.getByText('2015');
    fireEvent.click(button);

    expect(setFilterSpy).toHaveBeenCalledWith({
      selectedYear: '2015',
      successfullLaunch: '',
      successfullLanding: '',
    });
  });
});
