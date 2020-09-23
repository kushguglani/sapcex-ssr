import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import { fetchAppsIfNeeded } from '../redux/actions'
import Head from './Head';
import Spinner from './spinner/Spinner';
import Header from './header/Header';
import Filter from './filter/FilterContainer';
import SpaceBar from './spaceBar/SpaceBarContainer';
import Footer from './footer/Footer';


const App = (props) => {
  const { isFetching, apps } = props;
  const [displaySpinner, setDisplaySpinner] = useState(isFetching);
  const [filter, setFilter] = useState({
    selectedYear: '',
    successfullLaunch: '',
    successfullLanding: '',
  });
  useEffect(()=>{setDisplaySpinner(isFetching)},[isFetching])
  const fetchSpaceX = (filter)=>{
    props.fetchAppsIfNeeded(filter);
  }
  return (
    <div className="app">
      <Spinner display={displaySpinner} />
      <Head />
      <Header />
      <div className="container">
        <div className="col-3">
          <Filter
            filter={filter}
            setFilter={setFilter}
            fetchAppsIfNeeded={fetchSpaceX}
          />
        </div>
        <div className="col-9">
          <SpaceBar spacex={apps} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

function mapStateToProps({ isFetching, apps }) {
  return {
    isFetching,
    apps
  }
}
const mapDispatchToProps = dispatch => ({
  fetchAppsIfNeeded: (data) => dispatch(fetchAppsIfNeeded(data)),
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
