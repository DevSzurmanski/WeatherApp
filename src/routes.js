import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import OneDay from './containers/one_day';
import WeatherCharts from './containers/weather_charts';
import Polution from './containers/polution_charts';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={OneDay}/>
    <Route path="weathercharts" component={WeatherCharts}/>
    <Route path="polutioncharts" component={Polution}/>
  </Route>
);