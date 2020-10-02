import React from 'react';

export default function launchYear(props) {
  const { filter, setFilter,fetchAppsIfNeeded } = props;
  const changeSlectedYear = (e) => {
    let locaFilter = {...filter};
    locaFilter = locaFilter.selectedYear === e.target.innerHTML
      ? { ...locaFilter, selectedYear: '' }
      : { ...locaFilter, selectedYear: e.target.innerHTML };
      setFilter(locaFilter)
      fetchAppsIfNeeded(locaFilter)
  };
  const yearArray = Array.from({ length: 15 }, (_, idx) => `${2006 + idx}`);
  const yearList = yearArray.map((curr) => (
    <button
      key={curr}
      onClick={changeSlectedYear}
      className={filter.selectedYear === curr ? 'active' : ''}
    >
      {curr}
    </button>
  ));
  return (
    <div>
      <p className="center-text filter-text">Launch Year</p>
      <div className="btn-container">{yearList}</div>
    </div>
  );
}
