import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SpaceBar from '../spaceBar/SpaceBar';

describe('SpaceBar', () => {
  it('render SpaceBar with space data', () => {
    const space = [
      {
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
      },
    ];
    const {
      flight_number,
      links,
      rocket,
      mission_id,
      launch_year,
      launch_success,
    } = space[0];
    render(
      <SpaceBar
        flight_number={flight_number}
        rocket_name={rocket.rocket_name}
        mission_id={mission_id}
        launch_year={launch_year}
        launch_success={launch_success}
        img={links.mission_patch}
        key={space.flight_number}
      />
    );
    const launchText = screen.getByText('Falcon 9');
    const mission_idDoc = screen.getByText('EE86F74');
    const launch_yearDoc = screen.getByText('2014');
    const launch_successDoc = screen.getByText('true');
    expect(launchText).toBeInTheDocument();
    expect(mission_idDoc).toBeInTheDocument();
    expect(launch_yearDoc).toBeInTheDocument();
    expect(launch_successDoc).toBeInTheDocument();
  });
});
