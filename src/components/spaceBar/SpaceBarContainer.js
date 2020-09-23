import React, { useState, useEffect } from 'react';

import SpaceBar from './SpaceBar';

const SpaceBarContainer = ({ spacex }) => {
  const [spaceXdata, setSpaceData] = useState(null);
  useEffect(() => {
    const data =
      spacex.length > 0
        ? spacex.map((space) => {
            const {
              flight_number,
              links,
              rocket,
              mission_id,
              launch_year,
              launch_success,
            } = space;
            const land_success = ! (rocket.first_stage.cores.filter((curr)=> curr.land_success === false).length);
            return (
              <SpaceBar
                flight_number={flight_number}
                rocket_name={rocket.rocket_name}
                mission_id={mission_id}
                launch_year={launch_year}
                land_success={land_success}
                launch_success={launch_success}
                img={links.mission_patch}
                key={space.flight_number}
              />
            );
          })
        : 'No SpaceX Found';
    setSpaceData(data);
  }, [spacex]);

  return <div className="space-container">{spaceXdata}</div>;
};

export default SpaceBarContainer;
// useeffecct ->comp rem
//render
