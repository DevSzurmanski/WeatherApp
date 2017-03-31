import React, {Component} from 'react';
import {connect} from 'react-redux';

class OneDay extends Component {
    renderWeather(cityData) {
        const {name} = cityData;
        const temp = cityData.main.temp.toFixed(0);
        const {pressure} = cityData.main;
        const {country} = cityData.sys;

        return (
            <div key={name} className="wrapper d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center flex-column odContainer">
                    <div className="p-2 odCity">
                        <h1>{name}, {country}</h1>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <h3>{temp} &deg;C</h3>
                        </div>
                        <div className="p-2">
                            <h3>{pressure} hPa</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        const {onedayres} = this.props;
        // Primitive trigger
        if (!onedayres.name) {
            return <div/>;
        }
        return (
            <div>
                {this.renderWeather(onedayres)}
            </div>
        )
    }

}
function mapStateToProps(state) {
    return {onedayres: state.onedayres.one};
}
export default connect(mapStateToProps)(OneDay);