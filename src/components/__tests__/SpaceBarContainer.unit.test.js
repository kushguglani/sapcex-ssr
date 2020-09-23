import React from 'react';
import { render, screen } from '@testing-library/react';
import SpaceBarContainer from '../spaceBar/SpaceBarContainer';

describe('SpaceBarContainer', () => {
  it('renders SpaceBar without space data', () => {
    render(<SpaceBarContainer spacex={[]} text="Successfull Launch" />);
    const spaceXText = screen.getByText('No SpaceX Found');
    expect(spaceXText).toBeInTheDocument();
  });
  it('render SpaceBarContainer with space data', () => {
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
          first_stage: {
            cores: [
              {
                "core_serial": "B1033",
                "flight": 1,
                "block": 3,
                "gridfins": true,
                "legs": true,
                "reused": false,
                "land_success": false,
                "landing_intent": true,
                "landing_type": "ASDS",
                "landing_vehicle": "OCISLY"
              }
            ]
          }
        },
        launch_success: true,
        links: {
          "mission_patch": 'https://images2.imgbox.com/ff/81/EOWojaSj_o.png',
        },
      },
    ];
    render(<SpaceBarContainer spacex={space} />);
  });
});
