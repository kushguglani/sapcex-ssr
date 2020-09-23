import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import App from '../App';

describe('App', () => {
  it('renders default App with server data', () => {
    render(
      <Provider store={{
        "isFetching": false,
        "apps": [
          {
            flight_number: 14,
            mission_name: 'CRS-3',
            mission_id: ['EE86F74'],
            launch_year: '2014',
            launch_window: 0,
            rocket: {
              rocket_id: 'falcon9',
              rocket_name: 'Falcon 9',
              "first_stage": {
                "cores": [
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
                  },
                ]
              },
            },
            launch_success: true,
            links: {
              mission_patch:
                'https://images2.imgbox.com/ff/81/EOWojaSj_o.png',
            },
          }
        ],
        "getState": () => {
          return {
            "isFetching": false,
            "apps": [
              {
                flight_number: 14,
                mission_name: 'CRS-3',
                mission_id: ['EE86F74'],
                launch_year: '2014',
                launch_window: 0,
                rocket: {
                  rocket_id: 'falcon9',
                  rocket_name: 'Falcon 9',
                  "first_stage": {
                    "cores": [
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
                      },
                    ]
                  },
                },
                launch_success: true,
                links: {
                  mission_patch:
                    'https://images2.imgbox.com/ff/81/EOWojaSj_o.png',
                },
              }
            ],
          }
        },
        "subscribe": () => { },
        "dispatch":()=>{}
      }
      }>
        <App />
      </Provider>
    );
  });
});
