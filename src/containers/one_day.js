import React, {Component} from 'react';
import {connect} from 'react-redux';

class OneDay extends Component{
renderWeather(cityData){
    const name = cityData.name;
    const temp = cityData.main.temp;
    const pressure = cityData.main.pressure;
    return (
        <div key={name}  className="wrapper d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center flex-column odContainer">
            <div className="p-2 odCity">
                <h1>{name}</h1>
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
render(){
    const {onedayres} = this.props;
    
    return(
<div>

{onedayres.map(this.renderWeather)}


</div>
    )
}





}
function mapStateToProps({onedayres}){
    return {onedayres};
}
export default connect(mapStateToProps)(OneDay);