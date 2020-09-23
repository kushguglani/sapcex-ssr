import React from 'react';
import { render } from '@testing-library/react';
import HeaderModule from './header/Header';
import FooterModule from './footer/Footer';
import FilterContainer from './filter/FilterContainer';
import SpaceBarContainer from './spaceBar/SpaceBarContainer';
import Head from './Head';

describe('Module', () => {
  it('matches header snapshot', () => {
    const { container } = render(<HeaderModule />);
    expect(container.cloneNode(true)).toMatchSnapshot();
  });
  it('matches FooterModule snapshot', () => {
    const { container } = render(<FooterModule />);
    expect(container.cloneNode(true)).toMatchSnapshot();
  });
  it('matches Head snapshot', () => {
    const { container } = render(<Head />);
    expect(container.cloneNode(true)).toMatchSnapshot();
  });
  it('matches FilterContainer snapshot', () => {
    const filter = {
      selectedYear: '',
      successfullLaunch: '',
      successfullLanding: '',
    };
    const { container } = render(<FilterContainer filter={filter} />);
    expect(container.cloneNode(true)).toMatchSnapshot();
  });
  it('matches SpaceBarContainer snapshot', () => {
    const space = {
      flight_number: 14,
      mission_name: 'CRS-3',
      mission_id: ['EE86F74'],
      launch_year: '2014',
      launch_window: 0,
      rocket: {
        rocket_id: 'falcon9',
        rocket_name: 'Falcon 9',
        rocket_type: 'v1.1',
      },
      launch_success: true,
      links: {
        mission_patch: 'https://images2.imgbox.com/ff/81/EOWojaSj_o.png',
      },
    };
    const { container } = render(<SpaceBarContainer spacex={space} />);
    expect(container.cloneNode(true)).toMatchSnapshot();
  });
});
