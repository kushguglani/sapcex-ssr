import React from 'react';

export default function isSuccesfulFilter(props) {
  const { type, filter, setFilter,fetchAppsIfNeeded } = props;
  const toggleSuccessFull = (val) => {
    let locaFilter = {...filter};
    locaFilter = locaFilter[type] === val
      ? { ...locaFilter, [type]: '' }
      : { ...locaFilter, [type]: val };
      setFilter(locaFilter)
      fetchAppsIfNeeded(locaFilter)
    //redirect
  };
  return (
    <div className="filter-box">
      <p className="center-text filter-text">{props.text}</p>
      <button
        onClick={() => toggleSuccessFull(true)}
        className={filter[type] ? 'active' : ''}
      >
        True
      </button>
      <button
        onClick={() => toggleSuccessFull(false)}
        className={filter[type] === false ? 'active' : ''}
      >
        False
      </button>
    </div>
  );
}
