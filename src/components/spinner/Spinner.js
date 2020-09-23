import React from 'react';

export default function Spinner(props) {
  return props.display ? (
    <div className={`spinner_overlay `}>
      <div className="spinner"></div>
    </div>
  ) : (
    <></>
  );
}
