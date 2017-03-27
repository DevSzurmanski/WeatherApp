import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import OneDay from '../containers/one_day';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <OneDay />
        </div>
    );
  }
}
