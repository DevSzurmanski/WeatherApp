# WeatherApp

React-Redux simple weather app.


## Features:
- Easy check temperature and pressure in any city
- Easy check forecasts with temperature, pressure and humidities in any city
- On current weather page background depends on temperature

## How to start

**Required NPM**

1. Clone the repository.
2. Write in the terminal of the projects' root folder:
`npm install`
3. Change APIs in 
`root/src/actions/index.js`
Generate it [here](https://openweathermap.org/current).
4. Write in the terminal of the projects root folder:
`npm start`
5. Enter in your browser:
`localhost:8080`

## Coming Soon
**Features:**
- [x] One page easy searches temperature and pressure for the US cities
- [x] Charts with temperature, pressure and humidity for many cities at the same time
- [ ] Charts with wind, polution and level of danger for many cities at the same time
- [x] Separate routes for every feature with navbar
- [x] Country to select build in searcher input
- [ ] Animated background on root site depended on the weather of the searched city   

**Todo:**
- [ ] Better validation
- [ ] Refactoring all day all night
- [ ] Better RWD
- [ ] Unit tests
- [x] Some magic to get the country name from the search bar
- [ ] SASS


