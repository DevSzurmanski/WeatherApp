import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import OneDay from '../containers/one_day';
import Navbar from './navbar';
import WeatherCharts from '../containers/weather_charts'

const App = (props) => {

  return (
    <div>
      <Navbar/>
      <SearchBar/> 
      {props.children}
    </div>
  );
}

export default App;