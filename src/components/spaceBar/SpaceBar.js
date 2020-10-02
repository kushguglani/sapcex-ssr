import React from 'react';

export default function SpaceBar(props) {
  const {
    flight_number,
    img,
    rocket_name,
    mission_id,
    launch_year,
    launch_success,
    land_success
  } = props;
  return (
    <div className="box-container space-card" key={flight_number}>
      <figure>
      <img aria-label={rocket_name+ ' image'} src={img} alt={rocket_name + ' image'} />
      <figcaption className="rocket-name">{rocket_name}</figcaption>
      </figure>
      <p>Mission Ids:</p>
      <ul>
        {mission_id.length > 0
          ? mission_id.map((curr) => <li key={curr}>{curr}</li>)
          : 'No missions'}
      </ul>
      <p>
        Launch Year:<span> {launch_year}</span>
      </p>
      <p>
        Successfull Launch: <span>{'' + launch_success} </span>
      </p>
      <p>
        Successfull Launch: <span>{'' + land_success} </span>
      </p>
    </div>
  );
}
