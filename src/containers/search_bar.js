import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {oneWeather, fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

    }
    // Fat arrow = no binding required
    onInputChange = (event) => {

        this.setState({term: event.target.value});
    }
    // Fat arrow = no binding required
    onFormSubmit = (event) => {
        event.preventDefault();
        var toSplit = this.state.term;
        var comma = toSplit.lastIndexOf(',');
        var space = toSplit.lastIndexOf(' ')

        var toAction = (task) => {
            // country done
            var country = toSplit.substring(task + 1).trim();
            // city encoded
            var city = encodeURI(toSplit.substring(0, task));
            // two actions and imput cleaner
            this.props.oneWeather(city, country);
            this.props.fetchWeather(city, country);
            this.setState({term: ''});
        };
        // checking format of input
        if (comma !== -1) {
            toAction(comma);
        } else if (space !== -1) {
            toAction(space);
        } else {
            toAction(-1);
        }

    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Put here city, country code e.g. Boston, US"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>

                </span>
            </form>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({oneWeather, fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);