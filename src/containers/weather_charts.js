import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherCharts extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(forecast => forecast.main.temp);
        const pressures = cityData.list.map(forecast => forecast.main.pressure);
        const humidities = cityData.list.map(forecast => forecast.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td ><h2>{name}</h2></td>
                <td ><Chart data={temps} color="orange" units="&deg;C"/></td>
                <td ><Chart data={pressures} color="green" units="hPa"/></td>
                <td ><Chart data={humidities} color="blue" units="%"/></td>
            </tr>
        )
    }

    render() {

        return (
            <table className="table table-hover">
                <thead>
                    <tr >
                        <th >City</th>
                        <th >Temperature (&deg;C)</th>
                        <th >Pressure (hPa)</th>
                        <th >Humidities (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.forecast.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {forecast: state.onedayres.forecast};
};
export default connect(mapStateToProps)(WeatherCharts);