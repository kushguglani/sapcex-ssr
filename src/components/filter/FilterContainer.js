import React from 'react';

import LaunchYear from './LaunchYear';
import IsSuccesfulFilter from './IsSuccesfulFilter';

function filterContainer({ filter, setFilter,fetchAppsIfNeeded }) {
  return (
    <aside className="box-container">
      <h3 className="filter-heading">Filters</h3>
      <LaunchYear
        filter={filter}
        setFilter={setFilter}
        data-testid="launchYear"
        fetchAppsIfNeeded={fetchAppsIfNeeded}
      />
      <IsSuccesfulFilter
        text="Successfull Launch"
        filter={filter}
        setFilter={setFilter}
        data-testid="successLaunch"
        type="successfullLaunch"
        fetchAppsIfNeeded={fetchAppsIfNeeded}
      />
      <IsSuccesfulFilter
        text="Successfull Landing"
        filter={filter}
        setFilter={setFilter}
        data-testid="successLand"
        type="successfullLanding"
        fetchAppsIfNeeded={fetchAppsIfNeeded}
      />
    </aside>
  );
}
export default filterContainer;
